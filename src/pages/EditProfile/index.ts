import Block from '../../core/Block';
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
    });
  }

  onClickSaveProfile = () => {
    console.log('button save changed profile was clicked, this', this);
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
        {{{Field id="email" type="email" label="Почта" name="email" value="pochta@yandex.ru" onChange=onChangeProfileEmail}}}
        {{{Field id="login" type="text" label="Логин" name="newPassword" value="ivanivanov" onChange=onChangeProfileLogin}}}
        {{{Field id="name" type="text" label="Имя" name="oldPassword" value="Иван" onChange=onChangeProfileName}}}
        {{{Field id="second-name" type="text" label="Фамилия" name="newPassword" value="Иванов" onChange=onChangeProfileSecondName}}}
        {{{Field id="chat-name" type="text" label="Имя в чате" name="oldPassword" value="Иван" onChange=onChangeProfileChatName}}}
        {{{Field id="phone" type="tel" label="Телефон" name="newPassword" value="+7 (909) 967 30 30" onChange=onChangeProfilePhone}}}
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
