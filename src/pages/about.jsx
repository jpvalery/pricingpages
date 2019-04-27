import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout } from 'layouts';

const Wrapper = styled.section`
  margin: auto;
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
`;

const About = center => (
  <Layout>
    <Helmet title={'About BPP'} />
    <Header title="About BPP">A repository of the best pricing pages out there</Header>
    <Wrapper>
      Discussing with colleagues, we felt we could use a <a href="https://reallygoodemails.com/" target="_blank">ReallyGoodEmails</a> but for pricing page.<br />
      So I decided to build it :). It's a work in progress and I'll update it based on feedback received and needs we'll identify.
    </Wrapper>
    <Wrapper>
      <h3> License </h3>
      The code of the website is released under the <a href="https://github.com/jpvalery/pricingpages/blob/master/LICENSE" target="_blank">MIT License</a>.<br />
      The content of the website is released under the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0 International License</a>.
    </Wrapper>
    <Wrapper>
      <h3> License </h3>
      The code of the website is released under the <a href="https://github.com/jpvalery/pricingpages/blob/master/LICENSE" target="_blank">MIT License</a>.<br />
      The content of the website is released under the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0 International License</a>.
      <br /><br /><br />
    </Wrapper>
  </Layout>
);

export default About;
