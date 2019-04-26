import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About BPP'} />
    <Header title="About BPP">A repository of the best pricing pages out there</Header>
    <Container>
      Discussing with colleagues, we felt we could use a <a href="https://reallygoodemails.com/" target="_blank">ReallyGoodEmails</a> but for pricing page.<br /><br />
      So I decided to build it :). It's a work in progress and I'll update it based on feedback received and needs we'll identify.
    </Container>
    <Container>
      <h3> License </h3>
      The code of the website is released under the <a href="https://github.com/jpvalery/pricingpages/blob/master/LICENSE" target="_blank">MIT License</a>.<br />
      The content of the website is released under the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0 International License</a>.
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
