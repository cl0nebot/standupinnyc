import * as AWS from "aws-sdk"
const lambda = new AWS.Lambda({
  region: "us-east-1"
});
import {scrapeSources} from "./src/importer"

// The action lambda
export const scrape = (event, context, callback) => {
  scrapeSources(["COMEDYCELLAR", "STUBSITES"]).then(data => {
    console.log(data)
    callback(null, {statusCode: 200, body: JSON.stringify(data)});
  })

};

// The cron Lambda
export const cron = (event, context, callback) => {
  const params = {
    FunctionName: process.env.SCRAPER_FUNCTION_NAME,
    InvocationType: "Event",
    Payload: null
  };

  return lambda.invoke(params, function(error, data) {
    if (error) {
      console.error(JSON.stringify(error));
      return new Error(`Error printing messages: ${JSON.stringify(error)}`);
    } else if (data) {
      console.log(data);
    }
  });


};