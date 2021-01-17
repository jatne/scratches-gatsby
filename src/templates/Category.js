import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CategoryList from '../components/CategoryList';
import ScratchCardContainer from '../components/ScratchCardContainer';

const ScratchAppStyle = styled.div`
  display: grid;
  grid-template-rows: 70vh 1fr;
  row-gap:2rem;
`

const CategorySinglePage = ({data}) => {
  const {category, groups} = data;

  return (
    <ScratchAppStyle>
      <ScratchCardContainer background={category.background} groups={groups.nodes} />
      <CategoryList isInline={true}/>
    </ScratchAppStyle>
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
