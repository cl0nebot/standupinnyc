
export default function LoadMoreButton({data, fetchMore}) {

  return (
    <a
      onClick={() => {
        return fetchMore({
            variables: {
               after: data.data.pageInfo.endCursor
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
      }>load more</a>

  )
}