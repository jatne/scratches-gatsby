import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const CategorySingleStyle = styled.div`
  --radius: 10px;

  background: #ffcfcf;
  background-size: cover;
  background-position: center;
  border-radius: var(--radius);

  a {
    --brightness: .8;
    position: relative;
    display: flex;
    text-align: center;
    color: #000;
    font-size: 1.5rem;
    overflow: hidden;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);

    &:hover {
      img {
        --brightness: 1;
      }
    }
  }

  img {
    margin: 0;
    filter: brightness(var(--brightness));

  }

  span {
    display: block;
    width: 100%;
    z-index: 2;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,.3333);
    color: #fff;
    font-family: 'Domine', serif;
    padding: .5rem 0;
  }
`;

const CategorySingle = ({category, className}) => {

  return (
    <CategorySingleStyle className={className}>
      <Link to={`/category/${category.slug.current}`}>
        <span>{category.name}</span>
        {category.image &&
          <Img fluid={category.image.asset.fluid} style={{ position: "absolute", width: '100%', height: '100%', 'left': 0, 'top': 0 }}/>
        }
      </Link>
    </CategorySingleStyle>
  );
};

export default CategorySingle;
