import { css } from '@emotion/core';
import { Colors } from 'common/styles/global.styles';

const active = css({
  backgroundColor: Colors.BlueV2,
  color: 'white',
});

export const tab = css({
  cursor: 'pointer',
  padding: '17px 20px',
  fontSize: '24px',
  color: Colors.GreyV2,
  borderBottom: '2px solid transparent',
  width: 'calc(100% / 4)',
  textAlign: 'center',
  '&:hover': active,
  '&.active': active,
});

export const tabs = css({
  display: 'flex',
  borderBottom: '1px solid #D7DBDD',
  height: '62px',
  justifyContent: 'space-between',
  backgroundColor: Colors.GreyV4,
});
