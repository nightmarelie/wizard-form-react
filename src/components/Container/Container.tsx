import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({
  children,
}): React.ReactElement<Props> => {
  return <div className="container">{children}</div>;
};

Container.propTypes = { children: PropTypes.element.isRequired };

export default Container;
