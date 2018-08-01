import { graphql } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";
const COMEDIANS_PER_PAGE = 10;

function ComedianList( {
  data: {
    loading,
    error,
    allComedians
  },
  loadMoreComedians
}) {

  if (error) return <ErrorMessage message="Error loading comedians." />;
  if (loading) return <LoadingMessage message="loading" />;

  if (allComedians && allComedians.edges.length) {
    const {pageInfo, edges} = allComedians
    const comedians = edges.map(({ node }) => node);

    return (
      <section>
        <ul>
          {comedians.map((comedian, index) => (
            <li key={comedian.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={comedian.url}>{comedian.name}</a>

              </div>
            </li>
          ))}
        </ul>
        {pageInfo.hasNextPage ? (
          <button onClick={() => loadMoreComedians()}>
            {" "}
            {loading ? "Loading..." : "Next page"}{" "}
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

export const allComedians = gql`
   query allComedians($first: Int!, $after: String) {
    allComedians: comediansConnection(
      orderBy: createdAt_DESC
      first: $first
      after: $after
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
        hasPreviousPage
        endCursor
        startCursor
      }
      aggregate {
        count
      }
    }
  }`;
export const allComediansQueryVars = {
  first: COMEDIANS_PER_PAGE
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allComedians, {
  options: {
    variables: allComediansQueryVars
  },
  props: ({ data }) => {
    return {
      data,
      loadMoreComedians: () => {
        return data.fetchMore({
          variables: {
            after: data.allComedians.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              ...fetchMoreResult
            });
          }
        });
      }
    };
  }
})(ComedianList);
