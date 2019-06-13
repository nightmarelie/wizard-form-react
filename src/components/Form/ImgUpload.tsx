/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import Dropzone from 'react-dropzone';

import { download as styles } from './styles';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import Avatar from 'components/Avatar/Avatar';

type Props = {
  name: string;
  handler?: (event: React.MouseEvent) => void;
} & WrappedFieldProps;

export class ImgUpload extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      image: undefined,
    };
  }

  private handleOnDrop = (
    accepted: File[],
    rejected: File[],
    e: React.ChangeEvent<any>,
  ) => {
    let file;
    let {
      input: { onChange, onBlur },
    } = this.props;

    if (['drop', 'change'].includes(e.type)) {
      if (accepted.length) {
        file = accepted[0];
      } else {
        file = null;
      }
    }
    onBlur(file);
    onChange(file);
  };

  public render(): React.ReactElement {
    const {
      handler,
      input,
      meta: { touched, error },
    } = this.props;
    const image = input.value ? URL.createObjectURL(input.value) : undefined;
    return (
      <div css={styles}>
        <input type="hidden" disabled {...input} />
        <Dropzone onDrop={this.handleOnDrop}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps({ multiple: false })} />
                <Avatar className="preview" image={image} />
                <ActionIcon
                  className="action-add"
                  handler={e => handler && handler(e)}
                >
                  add avatar
                </ActionIcon>
              </div>
            );
          }}
        </Dropzone>
        {touched && error && <span className="error">{error}</span>}
      </div>
    );
  }
}
