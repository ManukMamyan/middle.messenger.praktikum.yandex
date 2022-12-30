import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import '../Profile/style.scss';

type TProps = {
  onClickSave: (event: MouseEvent) => void;
  onChangeOldPassword: (event: InputEvent) => void;
  onChangeNewPassword: (event: InputEvent) => void;
  onChangeRepeatNewPassword: (event: InputEvent) => void;
  errorOldPassword: string;
  errorNewPassword: string;
  errorRepeatPassword: string;
};

class EditPassword extends Block<TProps> {
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
    const inputElOldPassword = this._element?.querySelector(
      'input[name=oldPassword]'
    ) as HTMLInputElement;
    const inputElNewPassword = this._element?.querySelector(
      'input[name=newPassword]'
    ) as HTMLInputElement;
    const inputElRepeatNewPassword = this._element?.querySelector(
      'input[name=repeatNewPassword]'
    ) as HTMLInputElement;

    const oldPassword = inputElOldPassword.value;
    const newPassword = inputElNewPassword.value;
    const repeatNewPassword = inputElRepeatNewPassword.value;

    const errorOldPassword = validate({
      type: ValidateRuleType.PASSWORD,
      value: oldPassword,
    });
    const errorNewPassword = validate({
      type: ValidateRuleType.PASSWORD,
      value: newPassword,
    });
    const errorRepeatPassword = validate({
      type: ValidateRuleType.REPEAT_PASSWORD,
      value: newPassword,
      repeatedValue: repeatNewPassword,
    });

    this.setProps({
      onClickSave: this.onClickSave,
      onChangeOldPassword: this.onChangeOldPassword,
      onChangeNewPassword: this.onChangeNewPassword,
      onChangeRepeatNewPassword: this.onChangeRepeatNewPassword,
      errorOldPassword: errorOldPassword,
      errorNewPassword: errorNewPassword,
      errorRepeatPassword: errorRepeatPassword,
    });

    if (!errorOldPassword && !errorNewPassword && !repeatNewPassword) {
      console.log('[PASSWORD_DATA]', { errorOldPassword, errorNewPassword, repeatNewPassword });
    }
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
