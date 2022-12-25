import Block from '../../core/Block';
import './style.scss';

class Register extends Block {
  render() {
    return `
    <div class="container">
      <div class="form-wrapper">
        <h2 class="form-header">Регистрация</h2>
        <form class="register-form">
          <div>
            <label class="register-form__label email-label" for="email">Почта</label>
            <input class="register-form__input email-input" type="email" id="email" name="email" />
          </div>
          <div>
            <label class="register-form__label username-label" for="username">Логин</label>
            <input class="register-form__input username-input" type="text" id="username" name="username" />
          </div>
          <div>
            <label class="register-form__label name-label" for="name">Имя</label>
            <input class="register-form__input name-input" type="text" id="name" name="name" />
          </div>
          <div>
            <label class="register-form__label second-name-label" for="second-name">Фамилия</label>
            <input class="register-form__input second-name-input" type="text" id="second-name" name="second-name" />
          </div>
          <div>
            <label class="register-form__label phone-label" for="phone">Телефон</label>
            <input class="register-form__input phone-input" type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label class="register-form__label password-label" for="password">Пароль</label>
            <input class="register-form__input password-input" type="password" id="password" name="password" />
          </div>
          <div>
            <label class="register-form__label password-confirm-label" for="password-confirm">Пароль (еще раз)</label>
            <input class="register-form__input password-confirm-input" type="password" id="password-confirm" name="password-confirm" />
          </div>
        </form>
        <div class="register-form__actions">
          <button class="register-form__action-button">Зарегистрироваться</button>
          <a class="register-form__action-link" href="/">Войти</a>
        </div>
      </div>
    </div>
      `;
  }

};

export default Register;
