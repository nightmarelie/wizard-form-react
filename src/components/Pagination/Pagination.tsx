/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import styles from './styles';

type Props = {
  handler: (data: { selected: number }) => void;
} & Partial<DefaultProps>;

const defaultProps = {
  pageCount: 0,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5,
};

type DefaultProps = Readonly<typeof defaultProps>;

const Pagination: React.FC<Props> = ({
  handler,
  pageCount,
  marginPagesDisplayed,
  pageRangeDisplayed,
}): React.ReactElement<Props> => {
  return (
    <div css={styles}>
      <ReactPaginate
        activeClassName={'active'}
        containerClassName={'pagination'}
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount!}
        marginPagesDisplayed={marginPagesDisplayed!}
        pageRangeDisplayed={pageRangeDisplayed!}
        onPageChange={handler}
      />
    </div>
  );
};

Pagination.defaultProps = defaultProps;

Pagination.propTypes = {
  handler: PropTypes.func.isRequired,
  pageCount: PropTypes.number,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
};

export default Pagination;
