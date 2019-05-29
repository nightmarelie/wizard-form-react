import React, { ReactElement } from 'react';

interface IProps {}

const Wrapper: React.FC<IProps> = ({ children }): ReactElement<IProps> => {
  return (
    <div className="table-wrapper" role="table">
      {children}
    </div>
  );
};

export default Wrapper;
