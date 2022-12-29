import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate'
import './style.scss';

class Login extends Block {
  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      onChangeUsername: this.onChangeUsername,
      onChangePassword: this.onChangePassword,
      errorUsername: '',
      errorPassword: '',
    });
  }

  onClick = () => {
    const inputElUsername = this._element?.querySelector('input[name=username]') as HTMLInputElement;
    const inputElPassword = this._element?.querySelector('input[name=password]') as HTMLInputElement;

    const errorUsername= validate({type: ValidateRuleType.PASSWORD, value: inputElUsername.value})
    const errorPassword = validate({type: ValidateRuleType.PASSWORD, value: inputElPassword.value})

    this.setProps({
      onClick: this.onClick,
      onChangeUsername: this.onChangeUsername,
      onChangePassword: this.onChangePassword,
      errorUsername,
      errorPassword,
     })
  };

  onChangeUsername = () => {
    console.log('input username was changed, this', this);
  };

  onChangePassword = () => {
    console.log('input password was changed, this', this);
  };

  render() {
    return `
  <div class="container">
    <div class="form-wrapper">
      {{{Header header="Вход"}}}
      <form class="login-form">
        {{{Input error=errorUsername id="username" type="text" label="Логин" name="username" onChange=onChangeUsername}}}
        {{{Input error=errorPassword id="password" type="password" label="Пароль" name="password" onChange=onChangePassword}}}
      </form>
      <div class="login-form__actions">
        {{{Button text="Авторизоваться" size="large" onClick=onClick}}}
        {{{Link text="Нет аккаунта?" to="/register"}}}
      </div>
    </div>
  </div>
    `;
  }
}

export default Login;
