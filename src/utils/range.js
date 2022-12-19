/* eslint-disable no-param-reassign */
const range = (start, end, step, isRight) => {
  const resultArray = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = start < end ? 1 : -1;
  }

  const resultLength = (end - start) / (step || 1);

  if (isRight) {
    for (let i = resultLength - 1; i >= 0; i--) {
      resultArray[i] = start;
      start += step;
    }
  } else {
    for (let i = 0; i < resultLength; i++) {
      resultArray[i] = start;
      start += step;
    }
  }

  return resultArray;
};

export default range;
