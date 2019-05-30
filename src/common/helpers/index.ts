export const tempReplacer: (
  t: string,
  r: { [key: string]: string | number },
) => string = (temp, replacements) =>
  temp.replace(/:\w+/g, replace => String(replacements[replace]) || replace);
