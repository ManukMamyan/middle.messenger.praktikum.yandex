const validatePassword = (value: string, repeatedValue?: string) => {
  if (!!value && !!repeatedValue && repeatedValue !== value) {
    return 'Пароли не совпадают'
  }

  return '';
}

export default validatePassword