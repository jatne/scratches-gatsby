import React from 'react';
import styled from 'styled-components';
import CategorySingle from './CategorySingle';
import { useStaticQuery, graphql } from 'gatsby';

const CategoryListBaseStyle = styled.div`
  --col: 100%;
  --row: 15rem;

  width: 100%;
  column-gap: 1rem;

  @media screen and (min-width: 600px) {
    --col: 20rem;
  }
`;

const CategoryListDefaultStyle = styled(CategoryListBaseStyle)`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--col), 1fr));
  grid-auto-rows: var(--row);
`;

const CategoryListInlineStyle = styled(CategoryListBaseStyle)`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;

  .category__single {
    flex: 0 0 300px;
    min-height: var(--row);
  }
`;

const CategoryList = ({ isInline }) => {
  const { groups, categories } = useStaticQuery(graphql`
    query {
      categories: allSanityCategory {
        nodes {
          id
          name
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          background {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
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

  const uniqueCategories = new Set(groups.nodes.map(group => group.category.map(cat => cat.slug.current)).flat());

  const categoriesSingle = categories.nodes.map(category => (
    !uniqueCategories.has(category.slug.current) || <CategorySingle className="category__single" key={category.id} category={category}/>
  ))

  const categoryGrid = isInline ? <CategoryListInlineStyle>{categoriesSingle}</CategoryListInlineStyle> : <CategoryListDefaultStyle>{categoriesSingle}</CategoryListDefaultStyle>;

  return categoryGrid
};

export default CategoryList;
