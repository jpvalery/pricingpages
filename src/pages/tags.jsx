import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Layout} from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

const Categories = styled.section`
    text-align: ${props => (props.center ? 'center' : '')};
    margin: auto;
    padding: 1.5rem;
    width: 85%;
    max-width: ${props => props.theme.layout[props.type]};
    height: 100%;
    flex: 1;
    display: flex;
    @media (min-width: ${props => props.theme.breakpoints.m}) {
    padding-bottom: calc(100vh - 660px) !important;
    }

    @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 90%;
    }

    @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 95%;
    }
  `;

  return (
    <Layout>
      <Header title="Categories">Browse our curated list of pricing pages by categories</Header>
      <Categories>
        <TagsBlock list={tags} />
      </Categories>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
  }),
};
