import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About BPP'} />
    <Header title="About BPP">A repository of the best pricing pages out there</Header>
    <Container center={center}>
      Discussing with colleagues, we felt we could use a <a href="https://reallygoodemails.com/" target="_blank">ReallyGoodEmails</a> but for pricing page.<br />
      So I decided to build it :). It's a work in progress and I'll update it based on feedback received and needs we'll identify.
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
