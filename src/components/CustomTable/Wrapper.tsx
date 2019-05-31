import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Wrapper: React.FC<Props> = ({ children }): React.ReactElement<Props> => {
  return (
    <div className="table-wrapper" role="table">
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Wrapper;
