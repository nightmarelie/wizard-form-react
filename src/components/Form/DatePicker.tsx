/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import ActionIcon from 'components/ActionIcon/ActionIcon';

import {
  label as labelStyle,
  datePicker as datePickerStyle,
  input as inputStyle,
} from './styles';

type Props = {
  label: string;
  isRequired?: boolean;
  className?: string;
  dateFormat?: string;
} & WrappedFieldProps;

export class DatePicker extends React.Component<Props, {}> {
  public static defaultProps = {
    dateFormat: 'dd/MM/yyy',
    isRequired: true,
    className: '',
  };

  public constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(date: Date): void {
    this.props.input.onChange(moment(date).format('DD/MM/YYYY'));
  }

  public render(): React.ReactElement {
    const {
      input,
      label,
      isRequired,
      className,
      dateFormat,
      meta: { touched, error },
    } = this.props;

    const value = input.value;

    return (
      <label
        css={[labelStyle, datePickerStyle]}
        className={`date-picker-container ${className} ${
          isRequired ? 'required' : ''
        }`}
      >
        {label}
        <ReactDatePicker
          css={inputStyle}
          dateFormat={dateFormat}
          selected={value ? new Date() : null}
          onChange={this.handleChange}
          placeholderText={dateFormat}
          onBlur={this.props.input.onBlur}
        />
        <ActionIcon className="icon action-calendar" />
        {touched && error && <span className="error">{error}</span>}
      </label>
    );
  }
}

export default DatePicker;
