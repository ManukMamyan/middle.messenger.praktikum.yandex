import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TProps = {
  onClick: (event: SubmitEvent) => void;
  onChangeUsername: (event: InputEvent) => void;
  onFocusUsername: (event: InputEvent) => void;
  onBlurUsername: (event: InputEvent) => void;
  onChangePassword: (event: InputEvent) => void;
  onFocusPassword: (event: InputEvent) => void;
  onBlurPassword: (event: InputEvent) => void;
  toRegister: (event: MouseEvent) => void;
  errorUsername: string;
  errorPassword: string;
};

class Login extends Block<TProps> {
  static componentName = 'Login';

  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      onChangeUsername: this.onChangeUsername,
      onFocusUsername: this.onFocusUsername,
      onBlurUsername: this.onBlurUsername,
      onChangePassword: this.onChangePassword,
      onFocusPassword: this.onFocusPassword,
      onBlurPassword: this.onBlurPassword,
      toRegister: this.toRegister,
      errorUsername: '',
      errorPassword: '',
    });
  }

  setErrorUsername = (error: string) => {
    this.refs.errorRefUsername.setProps({
      error,
    });
  };

  setErrorPassword = (error: string) => {
    this.refs.errorRefPassword.setProps({
      error,
    });
  };

  getFormValues = (): { username: string; password: string } => {
    const inputElUsername = this._element?.querySelector(
      'input[name=username]'
    ) as HTMLInputElement;
    const inputElPassword = this._element?.querySelector(
      'input[name=password]'
    ) as HTMLInputElement;
    const username = inputElUsername.value;
    const password = inputElPassword.value;

    return { username, password };
  };

  validateUsername = (): boolean => {
    const { username } = this.getFormValues();
    const errorUsername = validate({ type: ValidateRuleType.LOGIN, value: username });
    let isValid = true;

    if (errorUsername) {
      this.setErrorUsername(errorUsername);

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

  validateForm = (): boolean => {
    return this.validateUsername() && this.validatePassword();
  };

  onClick = () => {
    const isValidForm = this.validateForm();

    if (isValidForm) {
      console.log('[LOGIN_DATA]', this.getFormValues());
    }
  };

  onChangeUsername = () => {
    this.setErrorUsername('');
  };

  onFocusUsername = () => {
    console.log('input username was focused, this', this);
  };

  onBlurUsername = () => {
    this.validateUsername();
  };

  onChangePassword = () => {
    this.setErrorPassword('');
  };

  onFocusPassword = () => {
    console.log('input password was focused, this', this);
  };

  onBlurPassword = () => {
    this.validatePassword();
  };

  toRegister = (e: MouseEvent) => {
    e.preventDefault();

    window.router.go('/register')
  }

  render() {
    return `
<main>
  <div class="container">
    <div class="form-wrapper">
      {{{Header header="Вход"}}}
      <form class="login-form">
        {{{Label label="Логин" id="username"}}}
        {{{Input  
          id="username" 
          type="text"  
          name="username" 
          onChange=onChangeUsername
          onFocus=onFocusUsername
          onBlur=onBlurUsername
          ref="loginInput"
        }}}
        {{{InputError error=errorUsername ref="errorRefUsername"}}}
        {{{Label label="Пароль" id="password"}}}
        {{{Input 
          id="password" 
          type="password"
          name="password" 
          onChange=onChangePassword
          onFocus=onFocusPassword
          onBlur=onBlurPassword
          ref="loginPassword"
        }}}
        {{{InputError error=errorPassword ref="errorRefPassword"}}}
      </form>
      <div class="login-form__actions">
        {{{Button text="Авторизоваться" size="large" onClick=onClick}}}
        {{{Link text="Нет аккаунта?" to="/register" onClick=toRegister}}}
      </div>
    </div>
  </div>
</main>
    `;
  }
}

export default Login;
