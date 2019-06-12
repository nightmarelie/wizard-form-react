import { Dispatch } from 'redux';

export const stringReplacer: (
  t: string,
  r: { [key: string]: string | number },
  p?: string,
) => string = (temp, replacements, placeholder = ':') =>
  temp.replace(
    new RegExp(`${placeholder}\\w+`, 'g'),
    replace =>
      String(replacements[replace.replace(placeholder, '')]) || replace,
  );

// simulate server latency
export const sleep: (ms: number) => Promise<NodeJS.Timeout> = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const capitalize: (t: string) => string = title =>
  title.charAt(0).toUpperCase() + title.slice(1);

export const promisify: <T>(
  a: any,
  params: { criteria: { [key: string]: string } },
) => (d: Dispatch) => Promise<T> = (action, params) => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(action({ ...params, resolve, reject })),
  );

export const throwObject: (o: { [key: string]: string }) => never = obj => {
  throw Object.assign({}, obj);
};
