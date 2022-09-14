exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulWydarzenia {
        nodes {
          description {
            description
          }
          image {
            url
          }
          slug
          title
          children {
            ... on MarkdownRemark {
              id
              html
            }
          }
        }
      }
    }
  `);

  data.allContentfulWydarzenia.nodes.forEach((node) => {
    actions.createPage({
      path: "/zawody/" + node.slug,
      component: require.resolve("./src/templates/event-details.js"),
      context: { slug: node.slug },
    });
  });
};
