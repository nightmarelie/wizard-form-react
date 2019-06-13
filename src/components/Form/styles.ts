import { css } from '@emotion/core';

import { Fonts, Colors } from 'common/styles/global.styles';
import star from 'common/images/icon-star.svg';

import recLeft from 'common/images/icon-rectangle-left.svg';
import recRight from 'common/images/icon-rectangle-right.svg';

export const form = css({
  display: 'flex',
  padding: '65px 100px',
  backgroundColor: Colors.LightV2,
  '.ver-indent': {
    marginTop: '140px',
  },
  '&:after': {
    content: '""',
    display: 'block',
    clear: 'both',
  },
  '.icon': {
    float: 'right',
    margin: '-50px 5px 0 -25px',
    position: 'relative',
    zIndex: 2,
  },
  '.right': {
    float: 'right',
  },
  '.left': {
    float: 'left',
  },
  '.w80': {
    width: '80%',
  },
  '.w70': {
    width: '70%',
  },
  '.w30': {
    width: '30%',
  },
  '.break-after': {
    marginBottom: '10px',
  },
  '.error': {
    color: Colors.RedV2,
    position: 'absolute',
    bottom: '6px',
    left: '12px',
    font: Fonts.Small,
  },
});

const icon = css({
  position: 'absolute',
  zIndex: 2,
  right: 0,
  bottom: 'calc(50% - 8px)',
  margin: 0,
  float: 'none',
});

export const input = css({
  width: '100%',
  height: '40px',
  border: `1px solid ${Colors.GreyV5}`,
  margin: '4px 0 20px',
  padding: '0 32px 0 10px',
  font: Fonts.Normal,
  '&::placeholder': {
    color: Colors.GreyV3,
  },
  '&[type=radio]': {
    width: 'auto',
    height: 'auto',
    margin: '0px 9px 0 0',
    float: 'left',
  },
  '&[type=checkbox]': {
    width: 'auto',
    height: 'auto',
    margin: '4px 9px 0 0',
    padding: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    outline: 'none',
    border: 'none',
    appearance: 'none',
    '&:after': {
      content: '""',
      width: '9px',
      height: '9px',
      border: '2px solid #ccc',
      margin: 0,
      verticalAlign: 'top',
      display: 'inline-block',
    },
    ':checked:after': {
      backgroundColor: Colors.BlueV2,
    },
  },
});

export const select = css({
  '.select-container': {
    color: Colors.GreyV3,
    margin: '4px 0 20px',
    '.select-element__menu': {
      borderRadius: 0,
      border: 'none',
      boxShadow: 'none',
      '.select-element__option--is-focused': {
        backgroundColor: Colors.LightV1,
      },
    },
    '.select-element__control': {
      borderRadius: 0,
      border: `1px solid ${Colors.GreyV5}`,
      padding: '6px 2px',
      '.select-element__value-container': {
        '.select-element__placeholder': {
          color: 'inherit',
        },
        '.select-element__multi-value': {
          backgroundColor: Colors.LightV1,
          marginRight: '8px',
          '.select-element__multi-value__label': {
            color: 'inherit',
          },
        },
      },
      '.select-element__input': {
        input: {
          height: '100%',
          margin: 0,
        },
      },
      '.select-element__indicators': {
        position: 'relative',
        '.select-element__indicator-separator': {
          width: 0,
          height: 0,
        },
        '.select-element__indicator': {
          svg: {
            width: '15px',
            height: '15px',
          },
        },
        '.select-element__clear-indicator': {
          position: 'absolute',
          right: '-32px',
        },
      },
    },
  },
});

export const datePicker = css({
  '.react-datepicker-wrapper, .react-datepicker__input-container': {
    width: '100%',
  },
  '.react-datepicker-popper': {
    width: '100%',
    marginTop: '-8px',
    '.react-datepicker__navigation': {
      border: 'none',
      width: '15px',
      height: '15px',
      top: '8px',
    },
    '.react-datepicker__navigation--previous': {
      backgroundImage: `url(${recLeft})`,
    },
    '.react-datepicker__navigation--next': {
      backgroundImage: `url(${recRight})`,
    },
    '.react-datepicker__triangle': {
      border: 'none',
      '&:before': {
        content: 'none',
      },
    },
    '.react-datepicker, .react-datepicker__header, .react-datepicker__month-container': {
      width: '100%',
      border: 'none',
      backgroundColor: 'white',
      font: Fonts.Small,
      color: Colors.GreyV1,
      '.react-datepicker__day-name, .react-datepicker__day': {
        width: '28px',
        height: '15px',
        lineHeight: '22px',
        padding: 0,
        margin: 0,
      },
      '.react-datepicker__day': {
        backgroundColor: Colors.LightV2,
        '&.react-datepicker__day--keyboard-selected, &.react-datepicker__month-text--keyboard-selected, &.react-datepicker__day--selected': {
          color: Colors.Black,
          fontWeight: 'bold',
        },
      },
      '.react-datepicker__current-month': {
        font: Fonts.Normal,
        marginBottom: '7px',
        paddingBottom: '13px',
      },
    },
  },
});

export const textarea = css({
  width: '100%',
  height: '100px',
  border: `1px solid ${Colors.GreyV5}`,
  margin: '4px 0 20px',
  padding: '7px 10px',
  font: Fonts.Normal,
  resize: 'none',
});

export const autocomplete = css({
  '&.autocomplete-dropdown-container': {
    position: 'absolute',
    top: '65px',
    backgroundColor: 'white',
    width: '100%',
    zIndex: 9999,
    '.suggestion-item': {
      cursor: 'pointer',
      lineHeight: '26px',
      height: '26px',
    },
    '.suggestion-item-active': {
      backgroundColor: Colors.LightV1,
    },
  },
});

export const label = css({
  font: Fonts.Normal,
  color: Colors.GreyV3,
  marginRight: '43px',
  cursor: 'pointer',
  display: 'inline-block',
  width: '100%',
  position: 'relative',
  '&.required:after': {
    content: '""',
    width: '10px',
    height: '10px',
    background: `no-repeat center url(${star})`,
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: '5px',
  },
  '&.check-container': {
    paddingLeft: '20px',
    marginBottom: '9px',
    lineHeight: '22px',
  },
  '&.date-picker-container': {
    '.icon': icon,
  },
  '[type=radio]:checked + span': {
    fontWeight: 'bold',
  },
});

export const button = css({
  padding: '12px 24px',
  font: Fonts.Normal,
  color: 'white',
  backgroundColor: Colors.GreyV5,
  cursor: 'pointer',
  border: 'none',
  overflow: 'visible',
  '&.active': {
    backgroundColor: Colors.BlueV3,
  },
  '&:not([disabled]):hover': {
    backgroundColor: Colors.BlueV1,
  },
  '&[disabled]:hover': {
    backgroundColor: Colors.RedV2,
    cursor: 'not-allowed',
  },
  ':active, :focus': {
    outline: 'none',
  },
  '&.finish': {
    backgroundColor: Colors.CyanV1,
    '&:hover': {
      backgroundColor: Colors.CyanV2,
    },
  },
});

export const download = css({
  display: 'inline-block',
  textAlign: 'center',
  position: 'relative',
  '.preview': {
    width: '171px',
    height: '171px',
    border: `3px solid #5E97F3`,
    borderRadius: '171px',
    marginBottom: '10px',
    display: 'block',
  },
  '.dropzone': {
    outline: 'none',
    border: `3px dashed ${Colors.LightV1}`,
    padding: '10px',
  },
  '.error': {
    bottom: '-15px',
  },
});

export const ul = css({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  li: {
    position: 'relative',
    '.icon': [
      icon,
      {
        right: '-28px',
      },
    ],
  },
});
