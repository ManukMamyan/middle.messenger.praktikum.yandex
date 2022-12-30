import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import '../Profile/style.scss';

class EditProfile extends Block {
  constructor() {
    super();

    this.setProps({
      onClickSaveProfile: this.onClickSaveProfile,
      onChangeProfileEmail: this.onChangeProfileEmail,
      onChangeProfileLogin: this.onChangeProfileLogin,
      onChangeProfileName: this.onChangeProfileName,
      onChangeProfileSecondName: this.onChangeProfileSecondName,
      onChangeProfileChatName: this.onChangeProfileChatName,
      onChangeProfilePhone: this.onChangeProfilePhone,
      errorEmail: '',
      errorLogin: '',
      errorName: '',
      errorSecondName: '',
      errorPhone: '',
    });
  }

  onClickSaveProfile = () => {
    const inputElEmail = this._element?.querySelector('input[name=email]') as HTMLInputElement;
    const inputElLogin = this._element?.querySelector('input[name=username]') as HTMLInputElement;
    const inputElName = this._element?.querySelector('input[name=name]') as HTMLInputElement;
    const inputElSecondName = this._element?.querySelector(
      'input[name=second-name]'
    ) as HTMLInputElement;
    const inputElPhone = this._element?.querySelector('input[name=phone]') as HTMLInputElement;

    const email = inputElEmail.value;
    const login = inputElLogin.value;
    const name = inputElName.value;
    const secondName = inputElSecondName.value;
    const phone = inputElPhone.value;

    const errorEmail = validate({ type: ValidateRuleType.EMAIL, value: email });
    const errorLogin = validate({ type: ValidateRuleType.LOGIN, value: login });
    const errorName = validate({ type: ValidateRuleType.FIRST_NAME, value: name });
    const errorSecondName = validate({
      type: ValidateRuleType.SECOND_NAME,
      value: secondName,
    });
    const errorPhone = validate({ type: ValidateRuleType.PHONE_NUMBER, value: phone });

    this.setProps({
      onClickSaveProfile: this.onClickSaveProfile,
      onChangeProfileEmail: this.onChangeProfileEmail,
      onChangeProfileLogin: this.onChangeProfileLogin,
      onChangeProfileName: this.onChangeProfileName,
      onChangeProfileSecondName: this.onChangeProfileSecondName,
      onChangeProfileChatName: this.onChangeProfileChatName,
      onChangeProfilePhone: this.onChangeProfilePhone,
      errorEmail,
      errorLogin,
      errorName,
      errorSecondName,
      errorPhone,
    });

    if (!errorEmail && !errorLogin && !errorName && !errorSecondName && !errorPhone) {
      console.log('[PROFILE_DATA]', {
        email,
        login,
        name,
        secondName,
        phone,
      });
    }
  };

  onChangeProfileEmail = () => {
    console.log('profile email is being changed, this', this);
  };

  onChangeProfileLogin = () => {
    console.log('profile login is being changed, this', this);
  };

  onChangeProfileName = () => {
    console.log('profile name is being changed, this', this);
  };

  onChangeProfileSecondName = () => {
    console.log('profile second name is being changed, this', this);
  };

  onChangeProfileChatName = () => {
    console.log('profile chat name is being changed, this', this);
  };

  onChangeProfilePhone = () => {
    console.log('profile phone number is being changed, this', this);
  };

  render(): string {
    return `
  <div class="container-profile">
    <div class="wrapper__action">
      <a class="back" href="/profile">&#x2190</a>
    </div>
    <main class="content-profile">
      <div class="avatar"></div>
      <h3 class="profile__header-name">Иван</h3>
      <div class="data-profile">
        <ul class="data-profile__list">
        {{{Field error=errorEmail id="email" type="email" label="Почта" name="email" value="pochta@yandex.ru" onChange=onChangeProfileEmail}}}
        {{{Field error=errorLogin id="login" type="text" label="Логин" name="newPassword" value="ivanivanov" onChange=onChangeProfileLogin}}}
        {{{Field error=errorName id="name" type="text" label="Имя" name="oldPassword" value="Иван" onChange=onChangeProfileName}}}
        {{{Field error=errorName id="second-name" type="text" label="Фамилия" name="newPassword" value="Иванов" onChange=onChangeProfileSecondName}}}
        {{{Field id="chat-name" type="text" label="Имя в чате" name="oldPassword" value="Иван" onChange=onChangeProfileChatName}}}
        {{{Field error=errorPhone id="phone" type="tel" label="Телефон" name="newPassword" value="+7 (909) 967 30 30" onChange=onChangeProfilePhone}}}
        </ul>
      </div>
       <div class="edit-profile-actions">
       {{{Button text="Сохранить" size="large" onClick=onClickSaveProfile}}}
       </div>
    </main>
  </div>
    `;
  }
}

export default EditProfile;
