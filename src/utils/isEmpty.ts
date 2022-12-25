const isMap = (val): val is Map<any, any> => {
  return val.toString() === '[object Map]';
};

const isSet = (val): val is Set<any> => {
  return val.toString() === '[object Set]';
};

const isEmpty = <T = any>(value: T) => {
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

  if (value.toString() && (isMap(value) || isSet(value))) {
    return !value.size;
  }

  if (valType === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
