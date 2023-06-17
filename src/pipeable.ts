import { TWSClass } from './TWSClass';
import {
  BooleanFN,
  _add,
  _ifElse,
  _remove,
  _unless,
  _when,
  _wordMap,
  convertToHover,
  convertToVariants,
} from './utils';

export const add = (className: string) => (tw: TWSClass) =>
  new TWSClass(_add(tw.className, className));

export const addWhen = (condition: boolean | BooleanFN, className: string) => (
  tw: TWSClass
) => new TWSClass(_when(condition)(_add)(tw.className, className));

export const addUnless = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  new TWSClass(_unless(condition)(_add)(tw.className, className));

export const addIfElse = (
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  new TWSClass(
    _ifElse(condition)(_add)(tw.className, classNameRight, classNameLeft)
  );

export const remove = (className: string) => (tw: TWSClass) =>
  new TWSClass(_remove(tw.className, className));

export const removeWhen = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  new TWSClass(_when(condition)(_remove)(tw.className, className));

export const removeUnless = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  new TWSClass(_unless(condition)(_remove)(tw.className, className));

export const removeIfElse = (
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  new TWSClass(
    _ifElse(condition)(_remove)(tw.className, classNameRight, classNameLeft)
  );

export const addHover = (className: string) => (tw: TWSClass) =>
  add(_wordMap(convertToHover)(className))(tw);

export const addHoverWhen = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  addWhen(condition, _wordMap(convertToHover)(className))(tw);

export const addHoverUnless = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  addUnless(condition, _wordMap(convertToHover)(className))(tw);

export const addHoverIfElse = (
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  addIfElse(
    condition,
    _wordMap(convertToHover)(classNameRight),
    _wordMap(convertToHover)(classNameLeft)
  )(tw);

export const removeHover = (className: string) => (tw: TWSClass) =>
  remove(_wordMap(convertToHover)(className))(tw);

export const removeHoverWhen = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  removeWhen(condition, _wordMap(convertToHover)(className))(tw);

export const removeHoverUnless = (
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  removeUnless(condition, _wordMap(convertToHover)(className))(tw);

export const removeHoverIfElse = (
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  removeIfElse(
    condition,
    _wordMap(convertToHover)(classNameRight),
    _wordMap(convertToHover)(classNameLeft)
  )(tw);

export const addVariants = (variants: string, className: string) => (
  tw: TWSClass
) => add(_wordMap(convertToVariants(variants))(className))(tw);

export const addVariantsWhen = (
  variants: string,
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  addWhen(condition, _wordMap(convertToVariants(variants))(className))(tw);

export const addVariantsUnless = (
  variants: string,
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  addUnless(condition, _wordMap(convertToVariants(variants))(className))(tw);

export const addVariantsIfElse = (
  variants: string,
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  addIfElse(
    condition,
    _wordMap(convertToVariants(variants))(classNameRight),
    _wordMap(convertToVariants(variants))(classNameLeft)
  )(tw);

export const removeVariants = (variants: string, className: string) => (
  tw: TWSClass
) => remove(_wordMap(convertToVariants(variants))(className))(tw);

export const removeVariantsWhen = (
  variants: string,
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  removeWhen(condition, _wordMap(convertToVariants(variants))(className))(tw);

export const removeVariantsUnless = (
  variants: string,
  condition: boolean | BooleanFN,
  className: string
) => (tw: TWSClass) =>
  removeUnless(condition, _wordMap(convertToVariants(variants))(className))(tw);

export const removeVariantsIfElse = (
  variants: string,
  condition: boolean | BooleanFN,
  classNameRight: string,
  classNameLeft: string
) => (tw: TWSClass) =>
  removeIfElse(
    condition,
    _wordMap(convertToVariants(variants))(classNameRight),
    _wordMap(convertToVariants(variants))(classNameLeft)
  )(tw);
