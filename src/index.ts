import { TWSClass } from './TWSClass';

/**
 * Create a TailwindString class instance.
 * @param {string} className - The className parameter is a string that represents the name of a tailwinds
 * class. It is used as an argument to create a new instance of the TailwindString.
 */
export const TWS = (className: string) => new TWSClass(className);

export * from './pipeable';
