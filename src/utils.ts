export const convertToVariants = (p: string) => (s: string) => `${p}:${s}`;
export const convertToHover = (s: string) => convertToVariants('hover')(s);
export type BooleanFN = (s: string) => boolean;
export const _add = (str: string, appended: string) => `${str} ${appended}`;
export const _remove = (str: string, removedWords: string) =>
  str
    .split(' ')
    .filter(c => !removedWords.split(' ').includes(c as string))
    .join(' ');
export const _when = (condition: boolean | BooleanFN) => (
  fn: typeof _add | typeof _remove
) => (str: string, appended: string) => {
  if (typeof condition === 'function' && condition(str)) {
    return fn(str, appended);
  }
  if (condition) {
    return fn(str, appended);
  }
  return str;
};
export const _unless = (condition: boolean | BooleanFN) =>
  typeof condition === 'function'
    ? _when((...args) => !condition(...args))
    : _when(condition);
export const _ifElse = (condition: boolean | BooleanFN) => (
  fn: typeof _add | typeof _remove
) => (str: string, appended1: string, appended2: string) => {
  if (typeof condition === 'function' && condition(str)) {
    return fn(str, appended1);
  }
  if (condition) {
    return fn(str, appended1);
  }
  return fn(str, appended2);
};
export const _wordMap = (map: ReturnType<typeof convertToVariants>) => (
  str: string,
  delimiter: string = ' '
) =>
  str
    .split(delimiter)
    .map(map)
    .join(delimiter);
