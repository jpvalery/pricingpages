import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  -webkit-clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  clip-path: polygon(100% 0, 0 0, 0 70%, 50% 100%, 100% 70%);
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    -webkit-clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
    clip-path: polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%);
  }
  background: ${props => props.theme.gradient.rightToLeft};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 325px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 450px;
  }
  position: relative;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0;
  margin: 1.2rem auto 2rem;
  align-items: center;
  a {
    text-decoration:none;
    color: inherit;
  }
  a:hover {
    text-decoration:underline;
    color: ${props => props.theme.colors.highlight};
  }
  h4{
    font-size: 0.9em;
  }
`;

const Subtitle = styled.p`
  max-width: 600px;
  margin: 0 2rem 0 2rem;
  color: ${props => props.theme.colors.white.light};
`;

const Header = ({ children, title, date, cover, url }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      {url && <h3><a href={`https://${url}?utm_source=bestpricingpages&utm_medium=post&utm_campaign=${title}`} target="_blank">{url}</a></h3>}
      {date && <h4>{date}</h4>}
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
  url: false,
};
