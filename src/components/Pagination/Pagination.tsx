/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './styles';

type Props = {
  handler: (data: { selected: number }) => void;
} & Partial<DefaultProps>;

const defaultProps = {
  pageCount: 0,
  currentPage: 0,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5,
};

type DefaultProps = Readonly<typeof defaultProps>;

const Pagination: React.FC<Props> = ({
  handler,
  pageCount,
  currentPage,
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
        forcePage={currentPage}
      />
    </div>
  );
};

Pagination.defaultProps = defaultProps;

export default Pagination;
