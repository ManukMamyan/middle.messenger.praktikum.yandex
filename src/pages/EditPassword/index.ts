import Block from '../../core/Block';
import '../Profile/style.scss';

class EditPassword extends Block {
  constructor() {
    super();

    this.setProps({
      onClickSave: this.onClickSave,
      onChangeOldPassword: this.onChangeOldPassword,
      onChangeNewPassword: this.onChangeNewPassword,
      onChangeRepeatNewPassword: this.onChangeRepeatNewPassword,
    });
  }

  onClickSave = () => {
    console.log('button save changed password was clicked, this', this);
  };

  onChangeOldPassword = () => {
    console.log('old password is being changed, this', this);
  };

  onChangeNewPassword = () => {
    console.log('new password is being changed, this', this);
  };

  onChangeRepeatNewPassword = () => {
    console.log('new password repeat is being changed, this', this);
  };

  render() {
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
        {{{Field id="oldPassword" type="password" label="Старый пароль" name="oldPassword" value="123456789" onChange=onChangeOldPassword}}}
        {{{Field id="newPassword" type="password" label="Новый пароль" name="newPassword" value="00123456789" onChange=onChangeNewPassword}}}
        {{{Field id="repeatNewPassword" type="password" label="Повторите новый пароль" name="repeatNewPassword" value="00123456789" onChange=onChangeRepeatNewPassword}}}
        </ul>
      </div>
       <div class="edit-profile-actions">
       {{{Button text="Сохранить" size="large" onClick=onClickSave}}}
       </div>
    </main>
  </div>
    `;
  }
}

export default EditPassword;
