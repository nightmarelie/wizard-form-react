/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './Title';

import { breadcrumbTitle as styles } from './styles';
import PropTypes from 'prop-types';

interface Props {
  title: string;
  breadcrumbTitle: string;
  breadcrumbLink: string;
}

export const BreadcrumbTitle: React.FC<Props> = ({
  title,
  breadcrumbTitle,
  breadcrumbLink,
}): React.ReactElement<Props> => {
  return (
    <div css={styles}>
      <Title title={title} />
      <Link className="back" to={breadcrumbLink}>
        {breadcrumbTitle}
      </Link>
    </div>
  );
};

BreadcrumbTitle.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbTitle: PropTypes.string.isRequired,
  breadcrumbLink: PropTypes.string.isRequired,
};
