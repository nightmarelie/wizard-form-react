import React, { ReactElement } from 'react';

interface IProps {}

const Container: React.FC<IProps> = ({ children }): ReactElement<IProps> => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
