import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import '../Profile/style.scss';

type TProps = {
  onClickSave: (event: MouseEvent) => void;
  onChangeOldPassword: (event: InputEvent) => void;
  onBlurOldPassword: (event: InputEvent) => void;
  onChangeNewPassword: (event: InputEvent) => void;
  onBlurNewPassword: (event: InputEvent) => void;
  onChangeRepeatNewPassword: (event: InputEvent) => void;
  onBlurRepeatNewPassword: (event: InputEvent) => void;
  errorOldPassword: string;
  errorNewPassword: string;
  errorRepeatPassword: string;
};

type TFormValues = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

class EditPassword extends Block<TProps> {
  static componentName = 'EditPassword';

  constructor() {
    super();

    this.setProps({
      onClickSave: this.onClickSave,
      onChangeOldPassword: this.onChangeOldPassword,
      onBlurOldPassword: this.onBlurOldPassword,
      onChangeNewPassword: this.onChangeNewPassword,
      onBlurNewPassword: this.onBlurNewPassword,
      onChangeRepeatNewPassword: this.onChangeRepeatNewPassword,
      onBlurRepeatNewPassword: this.onBlurRepeatNewPassword,
      errorOldPassword: '',
      errorNewPassword: '',
      errorRepeatPassword: '',
    });
  }

  setErrorOldPassword = (error: string) => {
    this.refs.errorRefOldPassword.setProps({
      error,
    });
  };

  setErrorNewPassword = (error: string) => {
    this.refs.errorRefNewPassword.setProps({
      error,
    });
  };

  setErrorRepeatNewPassword = (error: string) => {
    this.refs.errorRefRepeatPassword.setProps({
      error,
    });
  };

  getFormValues = (): TFormValues => {
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

    return { oldPassword, newPassword, repeatNewPassword };
  };

  validateOldPassword = (): boolean => {
    const { oldPassword } = this.getFormValues();
    const errorPassword = validate({ type: ValidateRuleType.PASSWORD, value: oldPassword });
    let isValid = true;

    if (errorPassword) {
      this.setErrorOldPassword(errorPassword);

      isValid = false;
    }

    return isValid;
  };

  validateNewPassword = (): boolean => {
    const { newPassword } = this.getFormValues();
    const errorPassword = validate({ type: ValidateRuleType.PASSWORD, value: newPassword });
    let isValid = true;

    if (errorPassword) {
      this.setErrorNewPassword(errorPassword);

      isValid = false;
    }

    return isValid;
  };

  validateRepeatNewPassword = (): boolean => {
    const { newPassword, repeatNewPassword } = this.getFormValues();
    const errorPasswordConfirm = validate({
      type: ValidateRuleType.REPEAT_PASSWORD,
      value: newPassword,
      repeatedValue: repeatNewPassword,
    });
    let isValid = true;

    if (errorPasswordConfirm) {
      this.setErrorRepeatNewPassword(errorPasswordConfirm);

      isValid = false;
    }

    return isValid;
  };

  validateForm = (): boolean => {
    return (
      this.validateOldPassword() && this.validateNewPassword() && this.validateRepeatNewPassword()
    );
  };

  onClickSave = () => {
    const isValidForm = this.validateForm();

    if (isValidForm) {
      console.log('[PASSWORD_DATA]', this.getFormValues());
    }
  };

  onChangeOldPassword = () => {
    this.setErrorOldPassword('');
  };

  onBlurOldPassword = () => {
    this.validateOldPassword();
  };

  onChangeNewPassword = () => {
    this.setErrorNewPassword('');
  };

  onBlurNewPassword = () => {
    this.validateNewPassword();
  };

  onChangeRepeatNewPassword = () => {
    this.setErrorRepeatNewPassword('');
  };

  onBlurRepeatNewPassword = () => {
    this.validateRepeatNewPassword();
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
        {{{Field 
          error=errorOldPassword 
          id="oldPassword" 
          type="password" 
          label="Старый пароль" 
          name="oldPassword" 
          value="123456789" 
          onChange=onChangeOldPassword
          onBlur=onBlurOldPassword
        }}}
        {{{InputError error=errorOldPassword ref="errorRefOldPassword"}}}
        {{{Field 
          error=errorNewPassword 
          id="newPassword" 
          type="password" 
          label="Новый пароль" 
          name="newPassword" 
          value="00123456789" 
          onChange=onChangeNewPassword
          onBlur=onBlurNewPassword
        }}}
        {{{InputError error=errorNewPassword ref="errorRefNewPassword"}}}
        {{{Field 
          error=errorRepeatPassword 
          id="repeatNewPassword" 
          type="password" 
          label="Повторите новый пароль" 
          name="repeatNewPassword" 
          value="00123456789" 
          onChange=onChangeRepeatNewPassword
          onBlur=onBlurRepeatNewPassword
        }}}
        {{{InputError error=errorRepeatPassword ref="errorRefRepeatPassword"}}}
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
