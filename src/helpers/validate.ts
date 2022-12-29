import validateEmail from './validateEmail';
import validatePhoneNumber from './validatePhoneNumber';
import validateLogin from './validateLogin';
import validatePassword from './validatePassword';
import validateRepeatPassword from './validateRepeatPassword';
import validateName from './validateName';
import validateSecondName from './validateSecondName';

export enum ValidateRuleType {
  LOGIN = 'LOGIN',
  PASSWORD = 'PASSWORD',
  REPEAT_PASSWORD = 'REPEAT_PASSWORD',
  EMAIL = 'EMAIL',
  PHONE_NUMBER = 'PHONE_NUMBER',
  FIRST_NAME = 'FIRST_NAME',
  SECOND_NAME = 'SECOND_NAME',
}

type ValidationData = {
  value: string;
  repeatedValue?: string;
  type: ValidateRuleType
}

const validate = (validationData: ValidationData): string => {
  let errorMessage: string = '';

  const {type, value, repeatedValue} = validationData;

  if (type === ValidateRuleType.LOGIN) {
    errorMessage = validateLogin(value);
  } else if (type === ValidateRuleType.PASSWORD) {
    errorMessage = validatePassword(value);
  } else if (type === ValidateRuleType.REPEAT_PASSWORD) {
    errorMessage = validateRepeatPassword(value, repeatedValue)
  } else if (type === ValidateRuleType.EMAIL) {
    errorMessage = validateEmail(value)
  } else if (type === ValidateRuleType.PHONE_NUMBER) {
    errorMessage = validatePhoneNumber(value)
  } else if (type === ValidateRuleType.FIRST_NAME) {
    errorMessage = validateName(value)
  } else if (type === ValidateRuleType.SECOND_NAME) {
    errorMessage = validateSecondName(value)
  }

  return errorMessage;
}

export default validate;