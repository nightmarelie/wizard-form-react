/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import cn from 'classnames';

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
    dateFormat: 'MM/DD/YYYY',
    isRequired: true,
    className: '',
  };

  private handleChange = (date: Date): void => {
    this.props.input.onChange(moment(date).format(this.props.dateFormat));
  };

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
        className={cn('date-picker-container', className, {
          required: isRequired,
        })}
      >
        {label}
        <ReactDatePicker
          css={inputStyle}
          {...input}
          dateFormat={dateFormat}
          selected={value ? moment(value).toDate() : null}
          onChange={this.handleChange}
          placeholderText={dateFormat}
        />
        <ActionIcon className="icon action-calendar" />
        {touched && error && <span className="error">{error}</span>}
      </label>
    );
  }
}

export default DatePicker;
