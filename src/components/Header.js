import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainerStyle = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1rem 0;
`;

const HeaderTitleStyle = styled.h1`
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainerStyle>
      <HeaderTitleStyle>
        <Link to="/"><span role="img" aria-label="puzzle">🧩</span>scratch-app</Link>
      </HeaderTitleStyle>
    </HeaderContainerStyle>
  )
};

export default Header;
