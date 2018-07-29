import { graphql } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import VenueShowUpdater from "./VenueShowUpdater";
const VENUES_PER_PAGE = 10;

function VenueList({
  data: {
    loading,
    error,
    allVenues: { aggregate, edges, pageInfo }
  },
  loadVenues
}) {
  const allVenues = edges.map(({ node }) => node);
  if (error) return <ErrorMessage message="Error loading venues." />;

  if (allVenues && allVenues.length) {
    return (
      <section>
        <ul>
          {allVenues.map((venue, index) => (
            <li key={venue.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={venue.url}>{venue.name}</a>
                <VenueShowUpdater slug={venue.slug} />
              </div>
            </li>
          ))}
        </ul>
        {pageInfo.hasNextPage ? (
          <button onClick={() => loadMoreVenues()}>
            {" "}
            {loading ? "Loading..." : "Show More"}{" "}
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

export const allVenues = gql`
  query allVenues($first: Int!, $skip: Int!) {
    allVenues: venuesConnection(
      orderBy: createdAt_DESC
      first: $first
      skip: $skip
    ) {
      edges {
        node {
          id
          name
          slug
          url
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
    }
  }
`;
console.log(allVenues)
export const allVenuesQueryVars = {
  skip: 0,
  first: VENUES_PER_PAGE
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allVenues, {
  options: {
    variables: allVenuesQueryVars
  },
  props: ({ data }) => {
    return {
      data,
      loadMoreVenues: () => {
        return data.fetchMore({
          variables: {
            skip: data.allVenues.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allVenues: {
                edges: [
                  ...previousResult.allVenues.edges,
                  ...fetchMoreResult.allVenues.edges
                ]
              }
            });
          }
        });
      }
    };
  }
})(VenueList);
