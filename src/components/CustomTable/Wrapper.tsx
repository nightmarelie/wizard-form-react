import React from 'react';

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

export default Wrapper;
