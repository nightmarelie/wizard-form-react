/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

// dropzone
import Dropzone from 'react-dropzone';

// crop
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// modal
import Modal from 'react-modal';

import {
  download as downloadStyles,
  crop as cropStyle,
  modal as modalStyle,
} from './styles';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import Avatar from 'components/Avatar/Avatar';
import * as helper from 'common/helpers';
import Button from './Button';

Modal.setAppElement('#root');

type Props = {
  name: string;
  handler?: (event: React.MouseEvent) => void;
} & WrappedFieldProps;

interface State {
  croppedImageSrc?: string;
  imageSrc?: string;
  crop: Crop;
  isModalOpen: boolean;
}

export class ImgUpload extends React.PureComponent<Props, State> {
  private imageRef?: HTMLImageElement;

  public constructor(props: Props) {
    super(props);
    this.state = {
      crop: {
        unit: 'px',
        width: 170,
        aspect: 1 / 1,
      },
      isModalOpen: false,
    };

    this.handleCropImage = this.handleCropImage.bind(this);
  }

  public componentDidMount(): void {
    const {
      input: { value: file },
    } = this.props;

    this.setState({
      imageSrc: helper.imgToUrl(file),
    });
  }

  public componentDidUpdate(prevProps: Props): void {
    const {
      input: { value: file },
    } = this.props;

    if (prevProps.input.value !== file) {
      this.setState({
        imageSrc: helper.imgToUrl(file),
      });
    }
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
    this.setState({
      isModalOpen: false,
    });
  };

  private handleOnCropChange = (crop: Crop) => {
    this.setState({ crop });
  };

  private handleOnCropComplete = (crop: Crop) => {
    this.makeClientCrop(crop);
  };

  private async makeClientCrop(crop: Crop): Promise<void> {
    if (this.imageRef && crop.width && crop.height) {
      const file = await this.getCroppedImg(this.imageRef, crop);
      this.setState({ croppedImageSrc: helper.imgToUrl(file) });
    }
  }

  private async getCroppedImg(
    image: HTMLImageElement,
    crop: Crop,
  ): Promise<File> {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width!;
    canvas.height = crop.height!;
    const ctx = canvas.getContext('2d');

    ctx!.drawImage(
      image,
      crop.x! * scaleX,
      crop.y! * scaleY,
      crop.width! * scaleX,
      crop.height! * scaleY,
      0,
      0,
      crop.width!,
      crop.height!,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
        }
        resolve(blob as File);
      }, 'image/jpeg');
    });
  }

  private handleOnImageLoaded = (image: HTMLImageElement) => {
    this.imageRef = image;
  };

  private async handleCropImage(): Promise<void> {
    const {
      input: { onChange },
    } = this.props;

    const { crop } = this.state;

    if (this.imageRef && crop.width && crop.height) {
      const file = await this.getCroppedImg(this.imageRef, crop);
      onChange(file);
      this.setState({ isModalOpen: false });
    }
  }

  private handleOpenModal = (event: React.MouseEvent): void => {
    event.stopPropagation();
    this.setState({ isModalOpen: true });
  };

  private handleCloseModal = (): void => {
    this.setState({ isModalOpen: false });
  };

  public render(): React.ReactElement {
    const {
      handler,
      input,
      meta: { touched, error },
    } = this.props;
    const { imageSrc, crop, isModalOpen } = this.state;
    return (
      <div css={downloadStyles}>
        <input type="hidden" disabled {...input} />
        <Dropzone onDrop={this.handleOnDrop}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps({ multiple: false })} />
                <Avatar className="preview" image={imageSrc} />
                {!imageSrc ? (
                  <ActionIcon
                    className="action-add"
                    handler={e => handler && handler(e)}
                  >
                    add avatar
                  </ActionIcon>
                ) : (
                  <ActionIcon
                    className="action-edit"
                    handler={this.handleOpenModal}
                  >
                    edit avatar
                  </ActionIcon>
                )}
              </div>
            );
          }}
        </Dropzone>
        {touched && error && <span className="error">{error}</span>}
        {imageSrc && (
          <Modal
            css={modalStyle}
            isOpen={isModalOpen}
            onRequestClose={this.handleCloseModal}
          >
            <div css={cropStyle}>
              <h2>Crop your image</h2>
              <ReactCrop
                crop={crop}
                src={imageSrc!}
                onChange={this.handleOnCropChange}
                onComplete={this.handleOnCropComplete}
                onImageLoaded={this.handleOnImageLoaded}
              />
              <br />
              <Button
                title="Crop image"
                disabled={false}
                handler={this.handleCropImage}
              />
              <Button
                title="Close"
                disabled={false}
                handler={this.handleCloseModal}
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
