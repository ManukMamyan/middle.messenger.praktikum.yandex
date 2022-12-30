import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TProps = {
  onClickRegister: (event: MouseEvent) => void;
  onInputEmail: (event: InputEvent) => void;
  onInputLogin: (event: InputEvent) => void;
  onInputName: (event: InputEvent) => void;
  onInputSecondName: (event: InputEvent) => void;
  onInputPhone: (event: InputEvent) => void;
  onInputPassword: (event: InputEvent) => void;
  onInputConfirmPassword: (event: InputEvent) => void;
  errorEmail: string;
  errorLogin: string;
  errorName: string;
  errorSecondName: string;
  errorPhone: string;
  errorPassword: string;
  errorPasswordConfirm: string;
};

class Register extends Block<TProps> {
  static componentName = 'Register';

  constructor() {
    super();

    this.setProps({
      onClickRegister: this.onClickRegister,
      onInputEmail: this.onInputEmail,
      onInputLogin: this.onInputLogin,
      onInputName: this.onInputName,
      onInputSecondName: this.onInputSecondName,
      onInputPhone: this.onInputPhone,
      onInputPassword: this.onInputPassword,
      onInputConfirmPassword: this.onInputConfirmPassword,
      errorEmail: '',
      errorLogin: '',
      errorName: '',
      errorSecondName: '',
      errorPhone: '',
      errorPassword: '',
      errorPasswordConfirm: '',
    });
  }

  onClickRegister = () => {
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

    const errorEmail = validate({ type: ValidateRuleType.EMAIL, value: email });
    const errorLogin = validate({ type: ValidateRuleType.LOGIN, value: login });
    const errorName = validate({ type: ValidateRuleType.FIRST_NAME, value: name });
    const errorSecondName = validate({ type: ValidateRuleType.SECOND_NAME, value: secondName });
    const errorPhone = validate({ type: ValidateRuleType.PHONE_NUMBER, value: phone });
    const errorPassword = validate({ type: ValidateRuleType.PASSWORD, value: password });
    const errorPasswordConfirm = validate({
      type: ValidateRuleType.REPEAT_PASSWORD,
      value: password,
      repeatedValue: passwordConfirm,
    });

    this.setProps({
      errorEmail,
      errorLogin,
      errorName,
      errorSecondName,
      errorPhone,
      errorPassword,
      errorPasswordConfirm,
      onClickRegister: this.onClickRegister,
      onInputEmail: this.onInputEmail,
      onInputLogin: this.onInputLogin,
      onInputName: this.onInputName,
      onInputSecondName: this.onInputSecondName,
      onInputPhone: this.onInputPhone,
      onInputPassword: this.onInputPassword,
      onInputConfirmPassword: this.onInputConfirmPassword,
    });

    if (
      !errorEmail &&
      !errorLogin &&
      !errorName &&
      !errorSecondName &&
      !errorPhone &&
      !errorPasswordConfirm
    ) {
      console.log('[REGISTER_DATA]', {
        email,
        login,
        name,
        secondName,
        phone,
        password,
        passwordConfirm,
      });
    }
  };

  onInputEmail = () => {
    console.log('input email was changed, this', this);
  };

  onInputLogin = () => {
    console.log('input username was changed, this', this);
  };

  onInputName = () => {
    console.log('input name was changed, this', this);
  };

  onInputSecondName = () => {
    console.log('input second name was changed, this', this);
  };

  onInputPhone = () => {
    console.log('input phone was changed, this', this);
  };

  onInputPassword = () => {
    console.log('input password was changed, this', this);
  };

  onInputConfirmPassword = () => {
    console.log('input confirm password was changed, this', this);
  };

  render() {
    return `
    <div class="container">
      <div class="form-wrapper">
      {{{Header header="Регистрация"}}}
        <form class="register-form">
          {{{Input error=errorEmail id="email" type="email" label="Почта" name="email" onChange=onInputEmail}}}
          {{{Input error=errorLogin id="username" type="text" label="Логин" name="username" onChange=onInputLogin}}}
          {{{Input error=errorName id="name" type="text" label="Имя" name="name" onChange=onInputName}}}
          {{{Input error=errorName id="second-name" type="text" label="Фамилия" name="second-name" onChange=onInputSecondName}}}
          {{{Input error=errorPhone id="phone" type="tel" label="Телефон" name="phone" onChange=onInputPhone}}}
          {{{Input error=errorPassword id="password" type="password" label="Пароль" name="password" onChange=onInputPassword}}}
          {{{Input error=errorPasswordConfirm id="password-confirm" type="password" label="Пароль (еще раз)" name="password-confirm" onChange=onInputConfirmPassword}}}
        </form>
        <div class="register-form__actions">
        {{{Button text="Зарегистрироваться" size="medium" onClick=onClickRegister}}}
        {{{Link text="Войти" to="/"}}}
        </div>
      </div>
    </div>
      `;
  }
}

export default Register;
