import Block from '../../core/Block';
import './style.scss';

class Login extends Block {
  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
    });
  }

  onClick = () => {
    console.log('button was clicked, this', this);
  };

  render() {
    return `
  <div class="container">
    <div class="form-wrapper">
      <h2 class="form-header">Вход</h2>
      <form class="login-form">
        <div>
          <label class="login-form__label username-label" for="username">Логин</label>
          <input class="login-form__input username-input" type="text" id="username" name="username" />
        </div>
        <div>
          <label class="login-form__label password-label" for="password">Пароль</label>
          <input class="login-form__input password-input" type="password" id="password" name="password" />
        </div>
      </form>
      <div class="login-form__actions">
        {{{Button text="Авторизоваться" onClick=onClick}}}
        <a class="login-form__action-link" href="/register">Нет аккаунта?</a>
      </div>
    </div>
  </div>
    `;
  }
}

export default Login;
