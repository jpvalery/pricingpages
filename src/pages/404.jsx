import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout } from 'layouts';
import errlogo from '../../static/404.png';

const Wrapper = styled.section`
  margin: auto;
  text-align:center;
  padding: 2rem 0 0 0;
  width: 50%;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
  }
  h4{
    font-style: italic;
    font-weight: 100 !important;
  }
  ul{
    margin-left: 2rem;
    margin-top: 0.6rem;
  }
`;

const ErrorPage = center => (
  <Layout>
  <Helmet title={'404 - BestPricingPages'} />
  <Header title="Oops! 404">We messed up. Sorry about that.</Header>
    <Wrapper>
      <img src={errlogo} alt="BestPricingPages 404" />
      <h3>This page does not exist or is no longer reachable.</h3>
      <h4>Or maybe never even existed in the first place...</h4>
        <br />
        <br />
      <h3>
        ↪️ Return to the <Link to="/">Homepage</Link>.
      </h3>
        <br />
        <br />
    </Wrapper>
  </Layout>
);

export default ErrorPage;
