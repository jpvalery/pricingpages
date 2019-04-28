import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import Img from 'gatsby-image';
import config from '../../config/site';


const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
  padding: 10px 25px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const Information = styled.div`
  text-align: center;
  margin: 1rem auto;
  height: calc(100vh - 518px) !important;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: calc(100vh - 455px) !important;;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${tagName} | BestPricingPages`} />
      <Header title={upperTag}>
        <StyledLink to="/tags">All Tags</StyledLink>
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagname: PropTypes.string,
  }),
};
