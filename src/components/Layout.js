import React from 'react';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Structure from '../styles/Structure';
import Animations from '../styles/Animations';
import styled from 'styled-components';

const MainStyle = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Structure />
      <Animations/>
      <Header />
      <MainStyle>
        {children}
      </MainStyle>
    </>
  );
}
