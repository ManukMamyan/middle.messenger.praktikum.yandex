import { Block, Store } from '../../core';
import { editProfile, editAvatar } from '../../services/profile';
import { withStore } from '../../HOCs/withStore';
import validate, { ValidateRuleType } from '../../helpers/validate';
import '../Profile/style.scss';
import './style.scss';

type TProps = {
  onClickSaveProfile: (event: MouseEvent) => void;
  onChangeProfileEmail: (event: InputEvent) => void;
  onBlurProfileEmail: (event: InputEvent) => void;
  onChangeProfileLogin: (event: InputEvent) => void;
  onBlurProfileLogin: (event: InputEvent) => void;
  onChangeProfileName: (event: InputEvent) => void;
  onBlurProfileName: (event: InputEvent) => void;
  onChangeProfileSecondName: (event: InputEvent) => void;
  onBlurProfileSecondName: (event: InputEvent) => void;
  onChangeProfileChatName: (event: InputEvent) => void;
  onChangeProfilePhone: (event: InputEvent) => void;
  onBlurProfilePhone: (event: InputEvent) => void;
  errorEmail: string;
  errorLogin: string;
  errorName: string;
  errorSecondName: string;
  errorPhone: string;
  store: Store<AppState>;
  email?: () => string | undefined;
  login?: () => string | undefined;
  firstName?: () => string | undefined;
  secondName?: () => string | undefined;
  displayName?: () => string | undefined;
  avatar?: () => string | undefined;
  phone?: () => string | undefined;
  isShowAvatarForm: boolean;
  back: (event: MouseEvent) => void;
};

type TFormValues = {
  email: string;
  login: string;
  name: string;
  secondName: string;
  phone: string;
};

class EditProfile extends Block<TProps> {
  static componentName = 'EditProfile';

  constructor() {
    super();

    this.setProps({
      onClickSaveProfile: this.onClickSaveProfile,
      onChangeProfileEmail: this.onChangeProfileEmail,
      onBlurProfileEmail: this.onBlurProfileEmail,
      onChangeProfileLogin: this.onChangeProfileLogin,
      onBlurProfileLogin: this.onBlurProfileLogin,
      onChangeProfileName: this.onChangeProfileName,
      onBlurProfileName: this.onBlurProfileName,
      onChangeProfileSecondName: this.onChangeProfileSecondName,
      onBlurProfileSecondName: this.onBlurProfileSecondName,
      onChangeProfileChatName: this.onChangeProfileChatName,
      onChangeProfilePhone: this.onChangeProfilePhone,
      onBlurProfilePhone: this.onBlurProfilePhone,
      errorEmail: '',
      errorLogin: '',
      errorName: '',
      errorSecondName: '',
      errorPhone: '',
      store: window.store,
      email: () => this.props.store.getState().user?.email,
      login: () => this.props.store.getState().user?.login,
      firstName: () => this.props.store.getState().user?.firstName,
      secondName: () => this.props.store.getState().user?.secondName,
      displayName: () => this.props.store.getState().user?.displayName,
      avatar: () => this.props.store.getState().user?.avatar,
      phone: () => this.props.store.getState().user?.phone,
      isShowAvatarForm: false,
      back: this.back,
    });
  }

  componentDidMount(): void {
    const avatarWrapper = document.getElementById('avatarWrapper');

    avatarWrapper?.addEventListener('click', () => {
      this.toggleAvatarForm();
    });
  }

  setErrorEmail = (error: string) => {
    this.refs.errorRefEmail.setProps({
      error,
    });
  };

  setErrorUsername = (error: string) => {
    this.refs.errorRefUsername.setProps({
      error,
    });
  };

  setErrorName = (error: string) => {
    this.refs.errorRefName.setProps({
      error,
    });
  };

  setErrorSecondName = (error: string) => {
    this.refs.errorRefSecondName.setProps({
      error,
    });
  };

  setErrorPhone = (error: string) => {
    this.refs.errorRefPhone.setProps({
      error,
    });
  };

  getFormValues = (): TFormValues => {
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

    return { email, login, name, secondName, phone };
  };

  validateEmail = (): boolean => {
    const { email } = this.getFormValues();
    const errorEmail = validate({ type: ValidateRuleType.EMAIL, value: email });
    let isValid = true;

    if (errorEmail) {
      this.setErrorEmail(errorEmail);

      isValid = false;
    }

    return isValid;
  };

  validateUsername = (): boolean => {
    const { login } = this.getFormValues();
    const errorUsername = validate({ type: ValidateRuleType.LOGIN, value: login });
    let isValid = true;

    if (errorUsername) {
      this.setErrorUsername(errorUsername);

      isValid = false;
    }

    return isValid;
  };

  validateName = (): boolean => {
    const { name } = this.getFormValues();
    const errorName = validate({ type: ValidateRuleType.FIRST_NAME, value: name });
    let isValid = true;

    if (errorName) {
      this.setErrorName(errorName);

      isValid = false;
    }

    return isValid;
  };

  validateSecondName = (): boolean => {
    const { secondName } = this.getFormValues();
    const errorSecondName = validate({ type: ValidateRuleType.SECOND_NAME, value: secondName });
    let isValid = true;

    if (errorSecondName) {
      this.setErrorSecondName(errorSecondName);

      isValid = false;
    }

    return isValid;
  };

  validatePhone = (): boolean => {
    const { phone } = this.getFormValues();
    const errorPhone = validate({ type: ValidateRuleType.PHONE_NUMBER, value: phone });
    let isValid = true;

    if (errorPhone) {
      this.setErrorPhone(errorPhone);

      isValid = false;
    }

    return isValid;
  };

  validateForm = (): boolean => {
    return (
      this.validateEmail() &&
      this.validateUsername() &&
      this.validateName() &&
      this.validateSecondName() &&
      this.validatePhone()
    );
  };

  onClickSaveProfile = () => {
    const isValidForm = this.validateForm();

    if (isValidForm) {
      const formValues = this.getFormValues();
      const editedData = {
        login: formValues.login,
        first_name: formValues.name,
        second_name: formValues.secondName,
        display_name: formValues.login,
        phone: formValues.phone,
        email: formValues.email,
      };
      this.props.store.dispatch(editProfile, editedData);
    }
  };

  onChangeProfileEmail = () => {
    this.setErrorEmail('');
  };

  onBlurProfileEmail = () => {
    this.validateEmail();
  };

  onChangeProfileLogin = () => {
    this.setErrorUsername('');
  };

  onBlurProfileLogin = () => {
    this.validateUsername();
  };

  onChangeProfileName = () => {
    this.setErrorName('');
  };

  onBlurProfileName = () => {
    this.validateName();
  };

  onChangeProfileSecondName = () => {
    this.setErrorSecondName('');
  };

  onBlurProfileSecondName = () => {
    this.validateSecondName();
  };

  onChangeProfileChatName = () => {
    console.log('profile chat name is being changed, this', this);
  };

  onBlurProfileChatName = () => {
    console.log('profile chat name is being blured, this', this);
  };

  onChangeProfilePhone = () => {
    this.setErrorPhone('');
  };

  onBlurProfilePhone = () => {
    this.validatePhone();
  };

  toggleAvatarForm = () => {
    this.setProps({ ...this.props, isShowAvatarForm: !this.props.isShowAvatarForm });

    if (this.props.isShowAvatarForm) {
      const form = document.getElementById('avatarForm') as HTMLFormElement;

      form.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();
        const data = new FormData(form);

        this.props.store.dispatch(editAvatar, data);
        this.toggleAvatarForm();
      });
    }
  };

  renderAvatarForm = () => {
    return `
    <form id="avatarForm" class="avatar_form__wrapper">
      {{{Input id="avatar" type="file" name="avatar" label="Аватар"}}}
      {{{Button size="medium" type="submit" text="Отправить"}}}
    <form> 
    `;
  };

  back = (e: MouseEvent) => {
    e.preventDefault();

    window.router.back();
  };

  render(): string {
    return `
  <div class="container-profile">
    {{{IconButton onClick=back}}}
    <main class="content-profile">
      <div id="avatarWrapper" class="avatar">
       <img class="avatar_image--edit-profile" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">
       ${this.props.isShowAvatarForm ? this.renderAvatarForm() : ''}
      </div>
      <h3 class="profile__header-name">Иван</h3>
      <div class="data-profile">
        <ul class="data-profile__list">
        {{{Field 
          id="email" 
          type="email" 
          label="Почта" 
          name="email" 
          value=email
          onChange=onChangeProfileEmail
          onBlur=onBlurProfileEmail
        }}}
        {{{InputError error=errorEmail ref="errorRefEmail"}}}
        {{{Field 
          id="login" 
          type="text" 
          label="Логин" 
          name="username" 
          value=login
          onChange=onChangeProfileLogin
          onBlur=onBlurProfileLogin
        }}}
        {{{InputError error=errorLogin ref="errorRefUsername"}}}
        {{{Field 
          id="name" 
          type="text" 
          label="Имя" 
          name="name" 
          value=firstName 
          onChange=onChangeProfileName
          onBlur=onBlurProfileName
        }}}
        {{{InputError error=errorName ref="errorRefName"}}}
        {{{Field 
          id="second-name" 
          type="text" 
          label="Фамилия" 
          name="second-name" 
          value=secondName
          onChange=onChangeProfileSecondName
          onBlur=onBlurSecondName
        }}}
        {{{InputError error=errorSecondName ref="errorRefSecondName"}}}
        {{{Field 
          id="chat-name" 
          type="text" 
          label="Имя в чате" 
          name="chat-name" 
          value=login
          onChange=onChangeProfileChatName
          onBlur=onBlurProfileChatName
        }}}
        {{{Field 
          id="phone" type="tel" 
          label="Телефон" 
          name="phone" 
          value=phone 
          onChange=onChangeProfilePhone
          onBlur=onBlurProfilePhone
        }}}
        {{{InputError error=errorPhone ref="errorRefPhone"}}}
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

export default withStore(EditProfile);
