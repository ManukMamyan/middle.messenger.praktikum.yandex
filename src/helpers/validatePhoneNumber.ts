const patternValidatePhoneNumber = new RegExp('^(\\+[0-9])\\s?\\(?[0-9]{3}\\)?\\s?[0-9]{7}$')

const validatePhoneNumber = (phoneNumber?: string) => {
  if (!phoneNumber) {
    return 'Поле не может быть пустым'
  }

  if (!patternValidatePhoneNumber.test(phoneNumber)) {
    return 'Обязательное поле в формате номера телефона.'
  }

  return ''
}

export default validatePhoneNumber