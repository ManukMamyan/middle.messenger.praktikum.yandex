import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TProps = {
  onClickRegister: (event: MouseEvent) => void;
  onInputEmail: (event: InputEvent) => void;
  onBlurEmail: (event: InputEvent) => void;
  onInputLogin: (event: InputEvent) => void;
  onBlurLogin: (event: InputEvent) => void;
  onInputName: (event: InputEvent) => void;
  onBlurName: (event: InputEvent) => void;
  onInputSecondName: (event: InputEvent) => void;
  onBlurSecondName: (event: InputEvent) => void;
  onInputPhone: (event: InputEvent) => void;
  onBlurPhone: (event: InputEvent) => void;
  onInputPassword: (event: InputEvent) => void;
  onBlurPassword: (event: InputEvent) => void;
  onInputConfirmPassword: (event: InputEvent) => void;
  onBlurConfirmPassword: (event: InputEvent) => void;
  errorEmail: string;
  errorLogin: string;
  errorName: string;
  errorSecondName: string;
  errorPhone: string;
  errorPassword: string;
  errorPasswordConfirm: string;
};

type TFormValues = {
  email: string;
  login: string;
  name: string;
  secondName: string;
  phone: string;
  password: string;
  passwordConfirm: string;
};

class Register extends Block<TProps> {
  static componentName = 'Register';

  constructor() {
    super();

    this.setProps({
      onClickRegister: this.onClickRegister,
      onInputEmail: this.onInputEmail,
      onBlurEmail: this.onBlurEmail,
      onInputLogin: this.onInputLogin,
      onBlurLogin: this.onBlurLogin,
      onInputName: this.onInputName,
      onBlurName: this.onBlurName,
      onInputSecondName: this.onInputSecondName,
      onBlurSecondName: this.onBlurSecondName,
      onInputPhone: this.onInputPhone,
      onBlurPhone: this.onBlurPhone,
      onInputPassword: this.onInputPassword,
      onBlurPassword: this.onBlurPassword,
      onInputConfirmPassword: this.onInputConfirmPassword,
      onBlurConfirmPassword: this.onBlurConfirmPassword,
      errorEmail: '',
      errorLogin: '',
      errorName: '',
      errorSecondName: '',
      errorPhone: '',
      errorPassword: '',
      errorPasswordConfirm: '',
    });
  }

  setErrorEmail = (error: string) => {
    this.refs.errorRefEmail.setProps({
      error,
    });
  };

  setErrorUsername = (error: string) => {
    this.refs.errorRefUsername.setProps({
      error,
    });
  };

  setErrorName = (error: string) => {
    this.refs.errorRefName.setProps({
      error,
    });
  };

  setErrorSecondName = (error: string) => {
    this.refs.errorRefSecondName.setProps({
      error,
    });
  };

  setErrorPhone = (error: string) => {
    this.refs.errorRefPhone.setProps({
      error,
    });
  };

  setErrorPassword = (error: string) => {
    this.refs.errorRefPassword.setProps({
      error,
    });
  };

  setErrorPasswordConfirm = (error: string) => {
    this.refs.errorRefPasswordConfirm.setProps({
      error,
    });
  };

  getFormValues = (): TFormValues => {
    const inputElEmail = this._element?.querySelector('input[name=email]') as HTMLInputElement;
    const inputElLogin = this._element?.querySelector('input[name=username]') as HTMLInputElement;
    const inputElName = this._element?.querySelector('input[name=name]') as HTMLInputElement;
    const inputElSecondName = this._element?.querySelector(
      'input[name=second-name]'
    ) as HTMLInputElement;
    const inputElPhone = this._element?.querySelector('input[name=phone]') as HTMLInputElement;
    const inputElPassword = this._element?.querySelector(
      'input[name=password]'
    ) as HTMLInputElement;
    const inputElPasswordConfirm = this._element?.querySelector(
      'input[name=password-confirm]'
    ) as HTMLInputElement;

    const email = inputElEmail.value;
    const login = inputElLogin.value;
    const name = inputElName.value;
    const secondName = inputElSecondName.value;
    const phone = inputElPhone.value;
    const password = inputElPassword.value;
    const passwordConfirm = inputElPasswordConfirm.value;

    return { email, login, name, secondName, phone, password, passwordConfirm };
  };

  validateEmail = (): boolean => {
    const { email } = this.getFormValues();
    const errorEmail = validate({ type: ValidateRuleType.EMAIL, value: email });
    let isValid = true;

    if (errorEmail) {
      this.setErrorEmail(errorEmail);

      isValid = false;
    }

    return isValid;
  };

  validateUsername = (): boolean => {
    const { login } = this.getFormValues();
    const errorUsername = validate({ type: ValidateRuleType.LOGIN, value: login });
    let isValid = true;

    if (errorUsername) {
      this.setErrorUsername(errorUsername);

      isValid = false;
    }

    return isValid;
  };

  validateName = (): boolean => {
    const { name } = this.getFormValues();
    const errorName = validate({ type: ValidateRuleType.FIRST_NAME, value: name });
    let isValid = true;

    if (errorName) {
      this.setErrorName(errorName);

      isValid = false;
    }

    return isValid;
  };

  validateSecondName = (): boolean => {
    const { secondName } = this.getFormValues();
    const errorSecondName = validate({ type: ValidateRuleType.SECOND_NAME, value: secondName });
    let isValid = true;

    if (errorSecondName) {
      this.setErrorSecondName(errorSecondName);

      isValid = false;
    }

    return isValid;
  };

  validatePhone = (): boolean => {
    const { phone } = this.getFormValues();
    const errorPhone = validate({ type: ValidateRuleType.PHONE_NUMBER, value: phone });
    let isValid = true;

    if (errorPhone) {
      this.setErrorPhone(errorPhone);

      isValid = false;
    }

    return isValid;
  };

  validatePassword = (): boolean => {
    const { password } = this.getFormValues();
    const errorPassword = validate({ type: ValidateRuleType.PASSWORD, value: password });
    let isValid = true;

    if (errorPassword) {
      this.setErrorPassword(errorPassword);

      isValid = false;
    }

    return isValid;
  };

  validatePasswordConfirm = (): boolean => {
    const { password, passwordConfirm } = this.getFormValues();
    const errorPasswordConfirm = validate({
      type: ValidateRuleType.REPEAT_PASSWORD,
      value: password,
      repeatedValue: passwordConfirm,
    });
    let isValid = true;

    if (errorPasswordConfirm) {
      this.setErrorPasswordConfirm(errorPasswordConfirm);

      isValid = false;
    }

    return isValid;
  };

  validateForm = (): boolean => {
    return (
      this.validateEmail() &&
      this.validateUsername() &&
      this.validateName() &&
      this.validateSecondName() &&
      this.validatePhone() &&
      this.validatePassword() &&
      this.validatePasswordConfirm()
    );
  };

  onClickRegister = () => {
    const isValidForm = this.validateForm();

    if (isValidForm) {
      console.log('[REGISTER_DATA]', this.getFormValues());
    }
  };

  onInputEmail = () => {
    this.setErrorEmail('');
  };

  onBlurEmail = () => {
    this.validateEmail();
  };

  onInputLogin = () => {
    this.setErrorUsername('');
  };

  onBlurLogin = () => {
    this.validateUsername();
  };

  onInputName = () => {
    this.setErrorName('');
  };

  onBlurName = () => {
    this.validateName();
  };

  onInputSecondName = () => {
    this.setErrorSecondName('');
  };

  onBlurSecondName = () => {
    this.validateSecondName();
  };

  onInputPhone = () => {
    this.setErrorPhone('');
  };

  onBlurPhone = () => {
    this.validatePhone();
  };

  onInputPassword = () => {
    this.setErrorPassword('');
  };

  onBlurPassword = () => {
    this.validatePassword();
  };

  onInputConfirmPassword = () => {
    this.setErrorPasswordConfirm('');
  };

  onBlurConfirmPassword = () => {
    this.validatePasswordConfirm();
  };

  render() {
    return `
  <main>
    <div class="container">
      <div class="form-wrapper">
      {{{Header header="Регистрация"}}}
        <form class="register-form">
          {{{Label label="Почта" id="email"}}}
          {{{Input 
            id="email" 
            type="email" 
            name="email" 
            onChange=onInputEmail
            onBlur=onBlurEmail
          }}}
          {{{InputError error=errorEmail ref="errorRefEmail"}}}
          {{{Label label="Логин" id="username"}}}
          {{{Input 
            id="username" 
            type="text" 
            name="username" 
            onChange=onInputLogin
            onBlur=onBlurLogin
          }}}
          {{{InputError error=errorLogin ref="errorRefUsername"}}}
          {{{Label label="Имя" id="name"}}}
          {{{Input 
            id="name" 
            type="text" 
            name="name" 
            onChange=onInputName
            onBlur=onBlurName
          }}}
          {{{InputError error=errorName ref="errorRefName"}}}
          {{{Label label="Фамилия" id="second-name"}}}
          {{{Input 
            id="second-name" 
            type="text" 
            name="second-name" 
            onChange=onInputSecondName
            onBlur=onBlurSecondName
          }}}
          {{{InputError error=errorSecondName ref="errorRefSecondName"}}}
          {{{Label label="Телефон" id="phone"}}}
          {{{Input 
            id="phone" 
            type="tel" 
            name="phone" 
            onChange=onInputPhone
            onBlur=onBlurPhone
          }}}
          {{{InputError error=errorPhone ref="errorRefPhone"}}}
          {{{Label label="Пароль" id="password"}}}
          {{{Input 
            id="password" 
            type="password" 
            name="password" 
            onChange=onInputPassword
            onBlur=onBlurPassword
          }}}
          {{{InputError error=errorPassword ref="errorRefPassword"}}}
          {{{Label label="Пароль (еще раз)" id="password-confirm"}}}
          {{{Input 
            id="password-confirm" 
            type="password" 
            name="password-confirm" 
            onChange=onInputConfirmPassword
            onBlur=onBlurConfirmPassword
          }}}
          {{{InputError error=errorPasswordConfirm ref="errorRefPasswordConfirm"}}}
        </form>
        <div class="register-form__actions">
        {{{Button text="Зарегистрироваться" size="medium" onClick=onClickRegister}}}
        {{{Link text="Войти" to="/"}}}
        </div>
      </div>
    </div>
  </main>
      `;
  }
}

export default Register;
