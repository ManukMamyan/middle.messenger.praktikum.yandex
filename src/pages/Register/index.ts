import Block from '../../core/Block';
import './style.scss';

class Register extends Block {
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
    });
  }

  onClickRegister = () => {
    console.log('button register was clicked, this', this);
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
          {{{Input id="email" type="email" label="Почта" name="email" onChange=onInputEmail}}}
          {{{Input id="username" type="text" label="Логин" name="username" onChange=onInputLogin}}}
          {{{Input id="name" type="text" label="Имя" name="name" onChange=onInputName}}}
          {{{Input id="second-name" type="text" label="Фамилия" name="second-name" onChange=onInputSecondName}}}
          {{{Input id="phone" type="tel" label="Телефон" name="phone" onChange=onInputPhone}}}
          {{{Input id="password" type="password" label="Пароль" name="password" onChange=onInputPassword}}}
          {{{Input id="password-confirm" type="password" label="Пароль (еще раз)" name="password-confirm" onChange=onInputConfirmPassword}}}
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
