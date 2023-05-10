const patternValidateName = new RegExp('^[A-Z]+[a-zA-Z]+$');

const validateName = (name?: string) => {
  if (!name) {
    return 'Поле не может быть пустым';
  }

  if (!patternValidateName.test(name)) {
    return 'Введен недопустимый символ. Только англ. буквы, символ _ и точка';
  }

  return '';
};

export default validateName;
