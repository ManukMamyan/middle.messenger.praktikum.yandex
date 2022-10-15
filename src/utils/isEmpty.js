const isEmpty = (value) => {
  if (!value) {
    return true;
  }

  const valType = typeof value;

  if (valType === 'boolean') {
    return true;
  }

  if (valType === 'number') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (
    value.toString &&
    (value.toString() === '[object Map]' || value.toString() === '[object Set]')
  ) {
    return !value.size;
  }

  if (valType === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
