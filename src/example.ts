import { TWS } from '.';
import { addVariants, addWhen, removeWhen } from './pipeable';

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
