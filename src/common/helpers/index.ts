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
