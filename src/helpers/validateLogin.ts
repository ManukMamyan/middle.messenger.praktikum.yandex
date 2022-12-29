const patternValidateLogin = new RegExp('[\\w.]*')
const MIN_LENGTH = 3;
const MAX_LENGTH = 20;

const validateLogin = (login?: string) => {
  if (!login) {
    return 'Поле не может быть пустым'
  }

  if (login.length < MIN_LENGTH || login.length > MAX_LENGTH) {
    return `Имя пользователя должен быть от ${MAX_LENGTH} до ${MAX_LENGTH} символов`;
  }

  if (!patternValidateLogin.test(login)) {
    return 'Введен недопустимый символ. Только англ. буквы, символ _ и точка'
  }

  return ''
}

export default validateLogin