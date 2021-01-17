const path = require(`path`);

async function turnCategoriesIntoPages({graphql, actions}) {
  const pageTemplate = path.resolve('./src/templates/Category.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
        }
      }
      groups: allSanityGroup {
        nodes {
          category {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const uniqueCategories = new Set(data.groups.nodes.map(group => group.category.map(cat => cat.slug.current)).flat());

  data.categories.nodes.forEach(category => {
    if ( !uniqueCategories.has(category.slug.current) ) {
      return;
    }

    actions.createPage({
      path: `category/${category.slug.current}`,
      component: pageTemplate,
      context: {
        slug: category.slug.current,
        // uniqueCategories: Array.from(uniqueCategories)
      }
    });
  });
}

exports.createPages = async (params) => {
  await Promise.all([
    turnCategoriesIntoPages(params),
  ]);
}
