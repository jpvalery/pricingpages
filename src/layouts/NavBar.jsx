import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: left;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  margin-bottom: 1rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 1.8rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1rem;
    line-height: 1em;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 604px) {
    font-size:0.7rem;
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="BestPricingPages Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/tags">Categories</Link>
      <a href="https://jpvalery.typeform.com/to/anlh6W" target="_blank">Submit a page</a>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
