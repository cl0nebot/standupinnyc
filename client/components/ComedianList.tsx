import { graphql } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";
const COMEDIANS_PER_PAGE = 10;

function ComedianList( {
  data: {
    loading,
    error,
    data
  },
  loadMoreComedians
}) {

  if (error) return <ErrorMessage message="Error loading comedians." />;
  if (loading) return <LoadingMessage message="loading" />;

  if (data && data.edges.length) {
    const {pageInfo, edges} = data
    const comedians = edges.map(({ node }) => node);

    return (
      <section>

        <ul>
          {comedians.map((comedian, index) => (
            <li key={comedian.id}>
              <div>
                <img width="200" height="200" src={comedian.imageUrl} />
                <a href={comedian.url}>{comedian.name}</a>

              </div>
            </li>
          ))}
        </ul>
        {pageInfo.hasNextPage ? (
          <button onClick={() => loadMoreComedians()}>
            {" "}
            {loading ? "Loading..." : "Load More"}{" "}
          </button>
        ) : (
          ""
        )}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    );
  }
  return <div>Loading</div>;
}

export const allComediansQuery = gql`
   query allComedians($first: Int!, $cursor: String) {
    data: comediansConnection(
      orderBy: createdAt_DESC
      first: $first
      after: $cursor
    ) {
      edges {
      node{
        id
        name
        slug
        url
        imageUrl
    }}
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`;
export const allComediansQueryVars = {
  first: COMEDIANS_PER_PAGE
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allComediansQuery, {
  options: {
    variables: allComediansQueryVars
  },
  props: ({ data }) => {
    return {
      data,
      loadMoreComedians: () => {
        return data.fetchMore({
          variables: {
             cursor: data.data.pageInfo.endCursor
           },
           updateQuery: (previousResult, { fetchMoreResult }) => {
             const newEdges = fetchMoreResult.data.edges;
             const pageInfo = fetchMoreResult.data.pageInfo;

             return newEdges.length
               ? {
                   // Put the new comments at the end of the list and update `pageInfo`
                   // so we have the new `endCursor` and `hasNextPage` values
                   data: {
                     __typename: previousResult.data.__typename,
                     edges: [...previousResult.data.edges, ...newEdges],
                     pageInfo
                   }
                 }
               : previousResult;
           }
        });
      }
    };
  }
})(ComedianList);
