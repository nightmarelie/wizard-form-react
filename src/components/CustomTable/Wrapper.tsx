import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }): React.ReactElement<Props> => {
  return (
    <div className="table-wrapper" role="table">
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
