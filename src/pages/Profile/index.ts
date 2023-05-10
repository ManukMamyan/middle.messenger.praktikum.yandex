import { Block, Store } from '../../core';
import { logout } from '../../services/auth';
import { withStore } from '../../HOCs/withStore';
import './style.scss';

type TProps = {
  toEditProfile: (event: MouseEvent) => void;
  toEditPassword: (event: MouseEvent) => void;
  logout: (event: MouseEvent) => void;
  back: (event: MouseEvent) => void;
  store: Store<AppState>;
  email?: () => string | undefined;
  login?: () => string | undefined;
  firstName?: () => string | undefined;
  secondName?: () => string | undefined;
  displayName?: () => string | undefined;
  phone?: () => string | undefined;
  avatar?: () => string | undefined;
};

class Profile extends Block<TProps> {
  static componentName = 'Profile';

  constructor() {
    super();

    this.setProps({
      toEditProfile: this.toEditProfile,
      toEditPassword: this.toEditPassword,
      logout: this.logout,
      back: this.back,
      store: window.store,
      email: () => this.props.store.getState().user?.email,
      login: () => this.props.store.getState().user?.login,
      firstName: () => this.props.store.getState().user?.firstName,
      secondName: () => this.props.store.getState().user?.secondName,
      displayName: () => this.props.store.getState().user?.displayName,
      phone: () => this.props.store.getState().user?.phone,
      avatar: () => this.props.store.getState().user?.avatar,
    });
  }

  toEditProfile = (e: MouseEvent) => {
    e.preventDefault();

    window.router.go('/editProfile');
  };

  toEditPassword = (e: MouseEvent) => {
    e.preventDefault();

    window.router.go('/editPassword');
  };

  logout = (e: MouseEvent) => {
    e.preventDefault();

    this.props.store.dispatch(logout);
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
      ${
        this.props.avatar
          ? `<img class="avatar_image" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">`
          : '<div class="avatar"></div>'
      }
      <h3 class="profile__header-name">{{firstName}}</h3>
      <div class="data-profile">
        <ul class="data-profile__list">
        {{{Field 
          id="email" 
          type="email" 
          label="Почта" 
          name="email" 
          value=email
          editable=${false}
        }}}
        {{{Field 
          id="login" 
          type="text" 
          label="Логин" 
          name="login" 
          value=login
          editable=${false}
        }}}
        {{{Field 
          id="name" 
          type="text" 
          label="Имя" 
          name="name" 
          value=firstName
          editable=${false}
        }}}
        {{{Field 
          id="second-name" 
          type="text" 
          label="Фамилия" 
          name="secondName" 
          value="secondName" 
          editable=${false}
        }}}
        {{{Field 
          id="chat-name" 
          type="text" 
          label="Имя в чате" 
          name="displayName" 
          value=login
          editable=${false}
        }}}
        {{{Field 
          id="phone" 
          type="tel" 
          label="Телефон" 
          name="phone" 
          value=phone
          editable=${false}
        }}}
        </ul>
      </div>
       <div class="profile-actions">
         <ul class="profile-actions__list">
           <li class="profile-actions__list-item">
             {{{Link text="Изменить данные" to="/editProfile" action=${true} onClick=toEditProfile}}}
           </li>
          <li class="profile-actions__list-item">
            {{{Link text="Изменить пароль" to="/editPassword" action=${true} onClick=toEditPassword}}}
          </li>
          <li class="profile-actions__list-item">
            {{{Link text="Выйти" to="/editPassword" action=${true} exit=${true} onClick=logout}}}           
          </li>
         </ul>
       </div>
    </main>
  </div>
    `;
  }
}

export default withStore(Profile);
