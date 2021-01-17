import { graphql } from 'gatsby';
import React from 'react';
import CategoryList from '../components/CategoryList';
import ScratchCardContainer from '../components/ScratchCardContainer';

const CategorySinglePage = ({data}) => {
  const {category, groups} = data;

  return (
    <>
      <ScratchCardContainer background={category.background} groups={groups.nodes} />
      <CategoryList isInline={true}/>
    </>
  )
}

export default CategorySinglePage;

export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: {current: {eq: $slug}}) {
      name
      slug {
        current
      }
      background {
        asset {
          url
        }
      }
    }
    groups: allSanityGroup(filter: {category: {elemMatch: {slug: {current: {eq: $slug}}}}}) {
      nodes {
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;
