import range from './range';

const rangeRight = (start: number, end?: number, step?: number): number[] => {
  return range(start, end, step, true);
};

export default rangeRight;
