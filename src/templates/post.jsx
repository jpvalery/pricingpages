import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import Img from 'gatsby-image';
import '../styles/prism';

const Hero = styled.div`
  flex: 0 0 auto;
  width: 45%;
  max-width: 45%;
  min-height: 40%; max-height: 40%;
  margin-right: 4%;
  z-index: 0;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
    &:hover {
      box-shadow: ${props => props.theme.shadow.feature.small.hover};
      transform: scale(1.02);
    }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;
const StyledImg = styled(Img)`
  min-height:100%;
`
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

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const url = post.frontmatter.url;
  const html = post.html;
  return (
    <Layout>
      <SEO
        title={`${title} | BestPricingPages`}
        description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      <Header title={title} date={date} url={url} />
      <Container>
        <Hero>
          <a href={`https://${url}?utm_source=bestpricingpages&utm_medium=post_img&utm_campaign=${title}`} target="_blank"><StyledImg fluid={image} alt={`${title} - BestPricingPages`} /></a>
        </Hero>
        <Content input={html} />
      </Container>
      <TagsBlock list={post.frontmatter.tags || []} />
      <SuggestionBar>
        <PostSuggestionPrev>
          {prev && (
            <Link to={prev.frontmatter.path}>
              ⬅️ Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestionPrev>
        <PostSuggestionNext>
          {next && (
            <Link to={next.frontmatter.path}>
              Next ➡️
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestionNext>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        url
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
`;
