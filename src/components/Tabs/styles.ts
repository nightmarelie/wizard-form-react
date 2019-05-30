import { css } from '@emotion/core';
import { Colors } from 'common/styles/global.styles';

export const tab = css({
  cursor: 'pointer',
  padding: '17px 55px',
  fontSize: '24px',
  color: Colors.GreyV2,
  borderBottom: '2px solid transparent',
  '&.active': {
    color: 'white',
    backgroundColor: Colors.BlueV2,
  },
});

export const tabs = css({
  display: 'flex',
  borderBottom: '1px solid #D7DBDD',
  height: '62px',
  justifyContent: 'space-between',
  backgroundColor: '#EAF1FD',
});
