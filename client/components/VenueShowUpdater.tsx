import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

function VenueShowUpdater ({ updateShows, slug }) {
  return (
    <button onClick={() => updateShows(slug)}>
      Update Shows
      <style jsx>{`
        button {
          background-color: transparent;
          border: 1px solid #e4e4e4;
          color: #000;
        }
        button:active {
          background-color: transparent;
        }
      `}</style>
    </button>
  )
}

const updateShows = gql`
  mutation updateShowsForVenue($slug: String) {
    updateShowsForVenue(where: {slug: $slug}) {
      id
      startTime
      name
    }
  }
`

export default graphql(updateShows, {
  props: ({ ownProps, mutate }) => ({
    updateShows: (slug) =>
      mutate({
        variables: { slug }
      })
  })
})(VenueShowUpdater)
