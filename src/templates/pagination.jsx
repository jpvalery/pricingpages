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

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.grey};
  box-shadow: ${props => props.theme.shadow.suggestion};
  a {
    color: ${props => props.theme.colors.black.base};
  }
  h3{
    color: ${props => props.theme.colors.black.blue};
  }
`;
const PostSuggestionPrev = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
  text-align:left;
`;
const PostSuggestionNext = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
  text-align:right;
`;

const Pagination = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "1" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    const prevLink = prevPage === "1" ? "/" : "/page/".concat(prevPage)
    const nextLink = "/page/".concat(nextPage)
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
      <SuggestionBar>
        <PostSuggestionPrev>
        {!isFirst && (
            <Link to={prevLink}>
              ⬅️ Previous
              <h3>Page {prevPage}</h3>
            </Link>
        )}
        </PostSuggestionPrev>
        <PostSuggestionNext>
          {!isLast && (
            <Link to={nextLink}>
              Next ➡️
              <h3>Page {nextPage}</h3>
            </Link>
          )}
        </PostSuggestionNext>
      </SuggestionBar>
    </Layout>
  );
};

export default Pagination;

Pagination.propTypes = {
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

export const paginationQuery = graphql`
  query paginationQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: {
          fields: [frontmatter___date],
          order: DESC
        }
        limit: $limit skip: $skip) {
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
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
