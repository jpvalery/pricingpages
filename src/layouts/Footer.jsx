import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 1rem;
    font-size: 12px;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  span {
    color: ${props => props.theme.colors.highlight};
  }
  a {
    text-decoration:none !important;
    color: ${props => props.theme.colors.white.light};
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        BestPricingPages.com - A repository of the best pricing pages
      </span>
       &nbsp;|&nbsp;
      <a href="https://jpvalery.me">Curated by @jpvalery</a>
    </Text>
  </Wrapper>
);
export default Footer;
