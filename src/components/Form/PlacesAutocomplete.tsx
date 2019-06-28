/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import ReactPlacesAutocomplete from 'react-places-autocomplete';
import { WrappedFieldProps } from 'redux-form';
import cn from 'classnames';

import {
  autocomplete as autocompleteStyle,
  label as labelStyle,
  input as inputStyle,
} from './styles';

type Props = {
  label: string;
  className: string;
  isRequired: boolean;
} & WrappedFieldProps;

export const PlacesAutocomplete: React.FC<Props> = ({
  input,
  label,
  isRequired = true,
  className = '',
  meta: { touched, error },
}): React.ReactElement<Props> => {
  return (
    <ReactPlacesAutocomplete value={input.value} onChange={input.onChange}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <label
          css={labelStyle}
          className={cn(className, { required: isRequired })}
        >
          <span>{label}</span>
          <input
            css={inputStyle}
            {...input}
            {...getInputProps({
              placeholder: 'Enter you address',
              className: 'location-search-input mt-1 full-width input-form',
            })}
          />
          {touched && error && <span className="error">{error}</span>}
          <div
            css={autocompleteStyle}
            className="autocomplete-dropdown-container"
          >
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, i) => {
              const className = suggestion.active
                ? 'suggestion-item suggestion-item-active'
                : 'suggestion-item';
              return (
                <div
                  key={i}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </label>
      )}
    </ReactPlacesAutocomplete>
  );
};
