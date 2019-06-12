import React from 'react';

import * as Form from 'components/Form';

interface Props {
  payload: Form.ButtonConfig[];
  isDisabled: boolean;
}

const Buttons: React.FC<Props> = ({
  payload,
  isDisabled,
}): React.ReactElement<Props> => {
  return (
    <React.Fragment>
      {payload.map((b, i) => (
        <Form.Button
          {...b}
          key={i}
          className={`ver-indent ${b.className}`}
          disabled={b.handleDisabled(isDisabled)}
        />
      ))}
    </React.Fragment>
  );
};

export default Buttons;
