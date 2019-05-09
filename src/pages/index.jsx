import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Button = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  a {
    margin: 0.8rem;
    color: ${props => props.theme.colors.white.light};
    padding: 0.5rem 4rem;
    background: #137991;
    border-radius: 8px;
    font-weight:600;
    font-size: 1.2rem;
    &:hover {
      background: ${props => props.theme.colors.background.dark};
      color: ${props => props.theme.colors.highlight};
      border: ${props => props.theme.colors.primary.light};
    }
`;


const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'BestPricingPages.com - Best pricing pages by the best companies'} />
      <Header title="Pricing Pages Done Right.">A curated repository of the best pricing pages by the best companies<br /><br />
        <a href="https://www.producthunt.com/posts/bestpricingpages-com?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bestpricingpages-com" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=152697&theme=light" alt="Product Hunt Embed" width="250px" height="54px" /></a>
      </Header>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
    <Button><Link to="/page/2">More Pricing Pages</Link></Button>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 16
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1920
                  quality: 80
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
