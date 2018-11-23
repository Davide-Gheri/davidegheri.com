const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getPortfolios = makeRequest(graphql, `
    {
      allDatoCmsPortfolio {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
    `).then(result => {
    result.data.allDatoCmsPortfolio.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.slug}`,
        component: path.resolve('src/templates/portfolio.tsx'),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getTags = makeRequest(graphql, `
    {
      allDatoCmsTag {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allDatoCmsTag.edges.forEach(({ node }) => {
      createPage({
        path: `/tags/${node.slug}`,
        component: path.resolve('src/templates/tag.tsx'),
        context: {
          id: node.id
        }
      })
    })
  });

  // Query for recipe nodes to use in creating pages.
  return Promise.all([
    getPortfolios,
    getTags,
  ])
};
