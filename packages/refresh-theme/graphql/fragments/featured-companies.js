const gql = require('graphql-tag');

module.exports = gql`

fragment ACBMFeaturedCompaniesFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  siteContext {
    path
  }
}

`;
