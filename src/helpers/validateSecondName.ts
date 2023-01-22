const patternValidateSecondName = new RegExp('^[A-Z]+[a-zA-Z]+$');

const validateSecondName = (secondName?: string) => {
  if (!secondName) {
    return 'Поле не может быть пустым';
  }

  if (!patternValidateSecondName.test(secondName)) {
    return 'Введен недопустимый символ. Только англ. буквы, символ _ и точка';
  }

  return '';
};

export default validateSecondName;
