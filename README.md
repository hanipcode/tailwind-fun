# Tailwind Fun
Introducing tailwind-fun: Simplify and Manage Tailwind CSS Class Names with Ease!

tailwind-fun is a powerful and intuitive library designed to revolutionize the way you handle Tailwind CSS class names. With its declarative approach, you can effortlessly write and manage Tailwind class names as strings, enabling you to create dynamic and responsive designs like never before.

## Features:

1. Declarative Syntax: Say goodbye to manually concatenating class names! With tailwind-fun, you can construct class names using a fluent and expressive syntax, resulting in cleaner and more maintainable code.

2. Conditional Class Binding: Easily handle dynamic class names based on conditions. The addWhen() method allows you to add classes only when specific conditions are met, streamlining your logic and enhancing code readability.

3. Variant Support: Take advantage of Tailwind's powerful variant system. tailwind-fun simplifies the process of adding variants to class names, making it effortless to incorporate hover, focus, active, and other states into your designs.

4. Compact and Lightweight: Designed to be lightweight and efficient, tailwind-fun seamlessly integrates with your project. It provides a minimal footprint and ensures optimal performance, so you can focus on building exceptional user experiences.

## Example Usages

it can always be chainable
```typescript
// Create a new instance of TWSClass
const tws = new TWSClass('bg-red-500');

// Add a class name
tws.add('text-white');
console.log(tws.className); // Output: 'bg-red-500 text-white'

// Add a class name conditionally using if-else
const isLoggedIn = true;
tws.addIfElse(isLoggedIn, 'font-bold', 'font-normal');
console.log(tws.className); // Output: 'bg-red-500 text-white font-bold'

// Add a class name unless a condition is true
const isDisabled = false;
tws.addUnless(isDisabled, 'cursor-pointer');
console.log(tws.className); // Output: 'bg-red-500 text-white font-bold cursor-pointer'

// Add a class name based on a condition
const isActive = true;
tws.addWhen(isActive, 'ring-2 ring-blue-500');
console.log(tws.className); // Output: 'bg-red-500 text-white font-bold cursor-pointer ring-2 ring-blue-500'

// Remove a class name
tws.remove('text-white');
console.log(tws.className); // Output: 'bg-red-500 font-bold cursor-pointer ring-2 ring-blue-500'
```

it is useful when you need to add complex logic to an element


```tsx
import { TWS } from "tailwind-fun";

type DateRowProps = { dates: readonly Date[] };

const overlayClass = (
  isSelected: boolean,
  isToday: boolean,
  isSameMonth: boolean
) =>
  TWS("absolute h-[36px] w-[36px] top-[-5.5px] left-[-7.5px] rounded-full")
    .addWhen(isSelected, "bg-selectedBlue")
    .addWhen(isToday, "border-selectedBlue border")
    .addVariants("group-hover", "bg-white z-10");

export const DateRow = consumeDateReducer<DateRowProps>(
  ({ dates, selectedMonth, dispatch, isSelected }) => (
    <div className="flex gap-5 mb-3 ">
      {dates.map((date) => (
        <button
          onClick={() => dispatch({ type: "UpdateDate", date })}
          className={
            TWS("flex-1 grow text-center relative group").addWhen(
              !isSameMonth(selectedMonth, date),
              "opacity-50"
            ).className
          }
        >
          <div
            className={
              overlayClass(
                isSelected(date),
                isToday(date),
                isSameMonth(selectedMonth, date)
              ).className
            }
          ></div>
          <span className={TWS("relative group-hover:text-dark").className}>
            {getDate(date)}
          </span>
        </button>
      ))}
    </div>
  )
);

```

## Pipeable API

tailwind fun also expose the pipeable API if you are not prefering the chaining API. you can use it like below

```typescript
import { TWS, addVariants, addWhen, removeWhen  } from 'tailwind-fun';

const pipe = <T>(value: T, ...fns: Function[]) =>
  fns.reduce((prev, next) => next(prev), value);

const overlayClass = (
  isSelected: boolean,
  isToday: boolean,
  isSameMonth: boolean
) =>
  pipe(
    TWS('absolute h-[36px] w-[36px] top-[-5.5px] left-[-7.5px] rounded-full'),
    addWhen(isSelected, 'bg-selectedBLue'),
    addWhen(isToday, 'border-selectedBlue border'),
    removeWhen(isSameMonth, 'border-selectedBlue'),
    addVariants('group-hover', 'bg-white z-10')
  );

const buttonClass = ({ primary, secondary, fluid, widthPx }: any) =>
  pipe(
    TWS('block p-5'),
    addWhen(primary, 'bg-primary text-primary'),
    addWhen(secondary, 'bg-secondary'),
    addWhen(fluid, 'w-100'),
    addWhen(Number.isInteger(widthPx), `w-[${widthPx}px]`)
  );

console.log(buttonClass({ primary: true, fluid: true }).className); //block p-5 bg-primary text-primary w-100
console.log(buttonClass({ secondary: true, fluid: true }).className); // block p-5 bg-secondary w-100;
console.log(buttonClass({ primary: true, widthPx: 50 }).className); // block p-5 bg-primary text-primary w-[50px];

```
the pipeable api expose the same method as TWSClass methods below. 

the pipeable api can also be composed to make more complex function. for example, the addWhen is actually using `add` at its base, and the `addVariantsWhen` is using `addWhen`, you get the idea. its actually just composing functions.

## API

### TWSClass

The `TWSClass` is a class that represents a Tailwind CSS class string. It has methods for adding, removing, and modifying classes based on various conditions and variants.

#### Constructor

The `constructor` method initializes the `_className` property with the provided class name.

#### Properties

- `className`: _(Getter)_ Returns the current class name.

#### Methods

- `add(className: string)`: Adds a new class name to an existing list of class names.

- `addIfElse(condition: boolean | BooleanFN, classNameRight: string, classNameLeft: string)`: Adds a class name to an element based on a condition using an if-else statement.

- `addUnless(condition: boolean | BooleanFN, className: string)`: Adds a class name to an element's class list unless a condition is true.

- `addWhen(condition: boolean | BooleanFN, className: string)`: Adds a class name to an element's existing class list based on a given condition.

- `remove(className: string)`: Removes a specified class name from the element's class list.

- `removeUnless(condition: boolean | BooleanFN, className: string)`: Removes a specified class name from an element's class list unless a given condition is true.

- `removeWhen(condition: boolean | BooleanFN, className: string)`: Removes a specified class name from an element's class list based on a given condition.

- `addHover(className: string)`: Adds a CSS class to an element to enable hover effects.

- `addHoverWhen(condition: boolean | BooleanFN, className: string)`: Adds a CSS class to an element when a certain condition is met, specifically for hover effects.

- `addHoverUnless(condition: boolean | BooleanFN, className: string)`: Adds a hover effect to an element unless a condition is met.

- `removeHover(className: string)`: Removes a CSS class that is used for hover effects.

- `removeHoverWhen(condition: boolean | BooleanFN, className: string)`: Removes a CSS class from an element when a certain condition is met, specifically for hover effects.

- `removeHoverUnless(condition: boolean | BooleanFN, className: string)`: Removes a CSS class from an element unless a condition is met, with the class being converted to a hover class.

- `addVariants(variants: string, className: string)`: Adds variants to a class name and returns the modified class name.

- `removeVariants(variants: string, className: string)`: Removes a given class name and its variants from an element.

- `addVariantsWhen(condition: boolean | BooleanFN, variants: string, className: string)`: Adds a Tailwind class to an element based on a condition and a set of variants.

- `removeVariantsWhen(condition: boolean | BooleanFN, variants: string, className: string)`: Removes a given class name from an element's class list based on a condition and a set of Tailwind variants.
