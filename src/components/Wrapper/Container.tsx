import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className = 'container',
}): React.ReactElement<Props> => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
};
