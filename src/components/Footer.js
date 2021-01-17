import React from 'react';
import styled from 'styled-components';

const FooterContainerStyle = styled.footer`
  padding: 2rem 0;
  background: #ffcfcf;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    margin: 0;
  }
`;

const FooterTitleStyle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainerStyle>
      <FooterTitleStyle>scratch-app</FooterTitleStyle>
      <p>
        <a href="mailto:dev@malok.dev">@</a><br/>2021
      </p>
    </FooterContainerStyle>
  )
};

export default Footer;
