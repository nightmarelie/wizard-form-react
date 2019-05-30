import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({
  children,
  className = 'container',
}): React.ReactElement<Props> => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};
