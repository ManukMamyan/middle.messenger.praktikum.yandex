const patternValidateEmail = new RegExp('[\\w.-]+@([A-Za-z0-9-]+\\.)+[A-Za-z0-9]+');

const validateEmail = (email?: string) => {
  if (!email) {
    return 'Поле не может быть пустым';
  }

  if (!patternValidateEmail.test(email)) {
    return 'Обязательное поле в формате email';
  }

  return '';
};

export default validateEmail;
