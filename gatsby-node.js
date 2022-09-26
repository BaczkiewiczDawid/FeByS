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

      allContentfulAktualnosci {
        nodes {
          title
          content {
            content
          }
          image {
            url
          }
          slug
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

  data.allContentfulAktualnosci.nodes.forEach((node) => {
    actions.createPage({
      path: "/aktualnosci/" + node.slug,
      component: require.resolve("./src/templates/news.js"),
      content: { slug: node.slug },
    });
  });
};
