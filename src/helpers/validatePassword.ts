const patternValidatePassword = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$');
const MIN_LENGTH = 8;
const MAX_LENGTH = 40;

const validatePassword = (password: string) => {
  if (!password) {
    return 'Поле не может быть пустым';
  }

  if (password.length < MIN_LENGTH || password.length > MAX_LENGTH) {
    return `Пароль должен быть от ${MAX_LENGTH} до ${MAX_LENGTH} символов`;
  }

  if (!patternValidatePassword.test(password)) {
    return 'Введен недопустимый символ. Пароль должен содержать заглавные и строчные буквы, цифры и специальные символы - !@#$&';
  }

  return '';
};

export default validatePassword;
