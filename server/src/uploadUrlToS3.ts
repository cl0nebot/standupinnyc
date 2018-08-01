import * as AWS from "aws-sdk";
import * as uuid from "uuid/v4";
import * as mime from "mime-types";
import Axios from "axios";
const S3_DEFAULTS = {
  Bucket: (process.env.S3_BUCKET || "standupindev"),
  ACL: "public-read",
}

const getStream = (url: string) => {
 return Axios({
    method: "GET",
    url: url,
    responseType: "stream"
  });
}

const generateFileName = (contentType: string) => `${uuid()}.${mime.extension(contentType)}`;

// Stream a file from a url to s3
// Examples:
// const imageUrl =
//   "https://www.comedycellar.com/wp-content/uploads/2018/06/gibran.jpg";
// uploadUrl(imageUrl, "comedians").then(resp => console.log(resp))
export default async function uploadUrl(url: string, prefix: string) {

  const response = await getStream(url)

  const contentLength = parseInt(response.headers["content-length"], 10);
  const contentType = response.headers["content-type"] as string;

  const fileName = generateFileName(contentType)

  const key = `${prefix}/${fileName}`
  const s3 = new AWS.S3();
  const s3File = await s3.upload({
      ...S3_DEFAULTS,
      Body: response.data,
      Key: key,
      ContentType: contentType,
      ContentLength: contentLength,
      ACL: "public-read",
      Metadata: {
        source: url
      }
    }).promise()
  return s3File
}

