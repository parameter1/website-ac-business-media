const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSearchSectionsFragment on WebsiteSection {
  id
  name
  children(input: { pagination: { limit: 0 } }) {
    edges {
      node {
        id
        name
        children(input: { pagination: { limit: 0 } }) {
          edges {
            node {
              id
              name
              children(input: { pagination: { limit: 0 } }) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
