import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  margin: auto;
  padding: 2rem 0;
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
  ul{
    margin-left: 2rem;
    margin-top: 0.6rem;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About us - BestPricingPages'} />
    <Header title="About BPP">A repository of the best pricing pages out there</Header>
    <Wrapper>
      <h3>About</h3>
      Discussing with colleagues, we felt we could use a <a href="https://reallygoodemails.com/" target="_blank">ReallyGoodEmails</a> but for pricing pages.<br />
      So I decided to build it :). It's a work in progress and I'll update it based on feedback received and needs we'll identify.
    </Wrapper>
    <Wrapper>
      <h3>Contributors</h3>
      This project wouldn't be here without the help of the following people:<br />
        <ul>
          <li><a href="http://github.com/henrymyers/">Henry Myers</a>: Wizardry to get the image on the post page</li>
        </ul>
      <h3>Contributing</h3>
      Wanna contribute to the content? <a href="https://jpvalery.typeform.com/to/anlh6W">Submit a page</a><br />
      Wanna contribute to the code? Take a look to our current <a href="https://github.com/jpvalery/pricingpages/projects">projects</a> and <a href="https://github.com/jpvalery/pricingpages/issues">issues</a> on GitHub.
    </Wrapper>
    <Wrapper>
      <h3>Licenses & Legal</h3>
      The code of the website is released under the <a href="https://github.com/jpvalery/pricingpages/blob/master/LICENSE" target="_blank">MIT License</a> and can be found on <a href="https://github.com/jpvalery/pricingpages" target="_blank">GitHub.</a><br />
      The content of the website is released under the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0 International License</a>.
      <br /><br />
      You can consult our <Link to="/terms">Terms</Link> and our <Link to="/privacy">Privacy Policy</Link>.
      <br /><br /><br /><br />
    </Wrapper>
  </Layout>
);

export default About;
