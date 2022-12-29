import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate'
import '../Profile/style.scss';

class EditPassword extends Block {
  constructor() {
    super();

    this.setProps({
      onClickSave: this.onClickSave,
      onChangeOldPassword: this.onChangeOldPassword,
      onChangeNewPassword: this.onChangeNewPassword,
      onChangeRepeatNewPassword: this.onChangeRepeatNewPassword,
      errorOldPassword: '',
      errorNewPassword: '',
      errorRepeatPassword: '',
    });
  }

  onClickSave = () => {
   const inputElOldPassword = this._element?.querySelector('input[name=oldPassword]') as HTMLInputElement;
   const inputElNewPassword = this._element?.querySelector('input[name=newPassword]') as HTMLInputElement;
   const inputElRepeatNewPassword = this._element?.querySelector('input[name=repeatNewPassword]') as HTMLInputElement;

   const errorOldPassword = validate({type: ValidateRuleType.PASSWORD, value: inputElOldPassword.value})
   const errorNewPassword = validate({type: ValidateRuleType.PASSWORD, value: inputElNewPassword.value})
   const errorRepeatPassword = validate({type: ValidateRuleType.REPEAT_PASSWORD, value: inputElOldPassword.value, repeatedValue: inputElRepeatNewPassword.value})

   this.setProps({
    onClickSave: this.onClickSave,
    onChangeOldPassword: this.onChangeOldPassword,
    onChangeNewPassword: this.onChangeNewPassword,
    onChangeRepeatNewPassword: this.onChangeRepeatNewPassword,
    errorOldPassword:  errorOldPassword,
    errorNewPassword: errorNewPassword,
    errorRepeatPassword: errorRepeatPassword,
   })
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
        {{{Field error=errorOldPassword id="oldPassword" type="password" label="Старый пароль" name="oldPassword" value="123456789" onChange=onChangeOldPassword}}}
        {{{Field error=errorOldPassword id="newPassword" type="password" label="Новый пароль" name="newPassword" value="00123456789" onChange=onChangeNewPassword}}}
        {{{Field error=errorRepeatPassword id="repeatNewPassword" type="password" label="Повторите новый пароль" name="repeatNewPassword" value="00123456789" onChange=onChangeRepeatNewPassword}}}
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
