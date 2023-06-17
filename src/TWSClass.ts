import {
  _add,
  BooleanFN,
  _ifElse,
  _unless,
  _when,
  _remove,
  _wordMap,
  convertToHover,
  convertToVariants,
} from './utils';

/* The `TWSClass` is a class that represents a Tailwind CSS class string. It has methods for adding,
removing, and modifying classes based on various conditions and variants. The `constructor` method
initializes the `_className` property with the provided class name. The `add`, `addIfElse`,
`addUnless`, `addWhen`, `remove`, `removeUnless`, and `removeWhen` methods modify the `_className`
property based on various conditions and class names. The `addHover`, `addHoverWhen`,
`addHoverUnless`, `removeHover`, `removeHoverWhen`, `removeHoverUnless`, `addVariants`, and
`removeVariants` methods modify the `_className` property based on hover variants and other Tailwind
CSS variants. */
export class TWSClass {
  constructor(className: string) {
    this._className = className;
    return this;
  }
  private _className: string = '';
  public get className(): string {
    return this._className;
  }
  private set className(className: string) {
    this._className = className;
  }

  /**
   * The "add" function adds a new class name to an existing list of class names.
   * @param {string} className - A string representing the class name that needs to be added to an HTML
   * element.
   * @returns {TWSClass}.
   */
  add(className: string) {
    this.className = _add(this.className, className);
    return this;
  }

  /**
   * This function adds a class name to an element based on a condition using an if-else statement.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * @param {string} classNameRight - A string representing the class name to be added if the condition
   * is true.
   * @param {string} classNameLeft - A string representing the class name to be added if the condition is
   * false or the BooleanFN function returns false.
   * @returns {TWSClass}
   */
  addIfElse(
    condition: boolean | BooleanFN,
    classNameRight: string,
    classNameLeft: string
  ) {
    this.className = _ifElse(condition)(_add)(
      this.className,
      classNameLeft,
      classNameRight
    );
    return this;
  }

  /**
   * The function adds a class name to an element's class list unless a condition is true.
   * @param {boolean | BooleanFN} condition - The condition parameter can be either a boolean value or a
   * function that returns a boolean value. It is used to determine whether or not the className should
   * be added to the element. If the condition is true, the className will not be added. If the condition
   * is false, the className will be added.
   * @param {string} className - The className parameter is a string that represents the name of the CSS
   * class that needs to be added to an HTML element.
   * @returns {TWSClass}
   */
  addUnless(condition: boolean | BooleanFN, className: string) {
    this.className = _unless(condition)(_add)(this.className, className);
    return this;
  }

  /**
   * The function adds a class name to an element's existing class list based on a given condition.
   * @param {boolean | BooleanFN} condition - The condition parameter is a boolean value or a function
   * that returns a boolean value. It is used to determine whether the className should be added or not.
   * If the condition is true, the className will be added, otherwise it will not be added.
   * @param {string} className - A string representing the name of the CSS class to be added to an HTML
   * element.
   * @returns {TWSClass}
   */
  addWhen(condition: boolean | BooleanFN, className: string) {
    this.className = _when(condition)(_add)(this.className, className);
    return this;
  }

  /**
   * This function removes a specified class name from the element's class list.
   * @param {string} className - a string representing the name of the CSS class to be removed from the
   * element's class attribute.
   * @returns {TWSClass}
   */
  remove(className: string) {
    this.className = _remove(this.className, className);
    return this;
  }

  /**
   * The function removes a specified class name from an element's class list unless a given condition is
   * true.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * If the condition is true, the class name will not be removed.
   * @param {string} className - The className parameter is a string that represents the name of the CSS
   * class that needs to be removed from an HTML element.
   * @returns {TWSClass}
   */
  removeUnless(condition: boolean | BooleanFN, className: string) {
    this.className = _unless(condition)(_remove)(this.className, className);
    return this;
  }

  /**
   * The function removes a specified class name from an element's class list based on a given condition.
   * @param {boolean | BooleanFN} condition - The condition parameter is a boolean value or a function
   * that returns a boolean value. It is used to determine whether the className should be removed or
   * not. If the condition is true, the className will be removed, otherwise it will remain unchanged.
   * @param {string} className - The className parameter is a string that represents the name of the CSS
   * class that needs to be removed from an HTML element.
   * @returns {TWSClass}
   */
  removeWhen(condition: boolean | BooleanFN, className: string) {
    this.className = _when(condition)(_remove)(this.className, className);
    return this;
  }

  /**
   * The function adds a CSS class to an element to enable hover effects.
   * @param {string} className - a string representing the name of a CSS class that will be used to apply
   * a hover effect to an HTML element.
   * @returns {TWSClass}
   */
  addHover(className: string) {
    return this.add(_wordMap(convertToHover)(className));
  }

  /**
   * This function adds a CSS class to an element when a certain condition is met, specifically for hover
   * effects.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * This parameter is used to determine whether the hover effect should be applied or not.
   * @param {string} className - The className parameter is a string that represents the name of the CSS
   * class that will be added to the element when the hover condition is met.
   * @returns {TWSClass}
   */
  addHoverWhen(condition: boolean | BooleanFN, className: string) {
    return this.addWhen(condition, _wordMap(convertToHover)(className));
  }

  /**
   * This function adds a hover effect to an element unless a condition is met.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean
   * value. This parameter is used to determine whether the hover effect should be added or not.
   * @param {string} className - The name of the CSS class that will be added to the element when the
   * hover event is triggered, unless the condition is met.
   * @returns {TWSClass}
   */
  addHoverUnless(condition: boolean | BooleanFN, className: string) {
    return this.addUnless(condition, _wordMap(convertToHover)(className));
  }

  /**
   * This function removes a CSS class that is used for hover effects.
   * @param {string} className - A string representing the name of the CSS class that is used to apply
   * hover effects to an HTML element. The `removeHover` method takes this class name as an argument
   * and removes it from the element, effectively removing the hover effect.
   * @returns {TWSClass}
   */
  removeHover(className: string) {
    return this.remove(_wordMap(convertToHover)(className));
  }

  /**
   * This function removes a CSS class from an element when a certain condition is met, specifically for
   * hover effects.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * This parameter determines whether the hover effect should be removed or not.
   * @param {string} className - The name of the CSS class that will be removed when the condition is
   * met.
   * @returns {TWSClass}
   */
  removeHoverWhen(condition: boolean | BooleanFN, className: string) {
    return this.removeWhen(condition, _wordMap(convertToHover)(className));
  }

  /**
   * This function removes a CSS class from an element unless a condition is met, with the class being
   * converted to a hover class.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * This parameter is used to determine whether the hover effect should be removed or not.
   * @param {string} className - The name of the CSS class that will be removed from an element if the
   * condition is not met.
   * @returns {TWSClass}
   */
  removeHoverUnless(condition: boolean | BooleanFN, className: string) {
    return this.removeUnless(condition, _wordMap(convertToHover)(className));
  }

  /**
   * This function adds variants to a class name and returns the modified class name.
   * @param {string} variants - The variants parameter is a string that contains one or more variant
   * names separated by commas. These variant names are used to generate CSS class names for styling
   * elements.
   * @param {string} className - The className parameter is a string that represents the name of the
   * CSS class that will be applied to the HTML element.
   * @returns {TWSClass}
   */
  addVariants(variants: string, className: string) {
    return this.add(_wordMap(convertToVariants(variants))(className));
  }

  /**
   * This function removes a given class name and its variants from an element.
   * @param {string} variants - a string representing a list of tailwinds variants separated by spaces, such as
   * "hover active focus"
   * @param {string} className - A string representing the name of a tailwinds class that needs to be removed
   * from the DOM.
   * @returns {TWSClass}
   */
  removeVariants(variants: string, className: string) {
    return this.remove(_wordMap(convertToVariants(variants))(className));
  }

  /**
   * This function adds a tailwinds class to an element based on a condition and a set of variants.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean value.
   * This parameter is used to determine whether or not to add the variants + classNames to current classNames.
   * @param {string} variants - A string representing one or more tailwinds variants separated by spaces. For
   * example, "hover", "focus", "group-hover" etc.
   * @param {string} className - A string representing the name of the tailwinds class to be added.
   * @returns {TWSClass}
   */
  addVariantsWhen(
    condition: boolean | BooleanFN,
    variants: string,
    className: string
  ) {
    return this.addWhen(
      condition,
      _wordMap(convertToVariants(variants))(className)
    );
  }

  /**
   * This function removes a given class name from an element's class list based on a condition and a
   * set of tailwind variants.
   * @param {boolean | BooleanFN} condition - A boolean value or a function that returns a boolean
   * value. This parameter is used to determine whether or not to remove the specified variants + classNames.
   * @param {string} variants - a string representing one or more tailwind variants like hover, group-hover:, etc
   * @param {string} className - The name of the tailwind class that will be removed from the element(s) if
   * the condition is met.
   * @returns {TWSClass}
   */
  removeVariantsWhen(
    condition: boolean | BooleanFN,
    variants: string,
    className: string
  ) {
    return this.removeWhen(
      condition,
      _wordMap(convertToVariants(variants))(className)
    );
  }
}
