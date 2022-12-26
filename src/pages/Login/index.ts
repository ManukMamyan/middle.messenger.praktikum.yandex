import Block from '../../core/Block';
import './style.scss';

class Login extends Block {
  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      onChangeUsername: this.onChangeUsername,
      onChangePassword: this.onChangePassword,
    });
  }

  onClick = () => {
    console.log('button was clicked, this', this);
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
        {{{Input id="username" type="text" label="Логин" name="username" onChange=onChangeUsername}}}
        {{{Input id="password" type="password" label="Пароль" name="password" onChange=onChangePassword}}}
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
