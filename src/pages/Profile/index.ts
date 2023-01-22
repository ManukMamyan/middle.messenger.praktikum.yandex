import { Block, Store } from '../../core';
import { logout } from '../../services/auth';
import { withStore } from '../../HOCs/withStore';
import './style.scss';

type TProps = {
  toEditProfile: (event: MouseEvent) => void;
  toEditPassword: (event: MouseEvent) => void;
  logout: (event: MouseEvent) => void;
  store: Store<AppState>;
};

class Profile extends Block<TProps> {
  static componentName = 'Profile';

  constructor() {
    super();

    this.setProps({
      toEditProfile: this.toEditProfile,
      toEditPassword: this.toEditPassword,
      logout: this.logout,
      store: window.store,
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

  render(): string {
    return `
  <div class="container-profile">
    <div class="wrapper__action">
      <a class="back" href="/">&#x2190</a>
    </div>
    <main class="content-profile">
      <div class="avatar"></div>
      <h3 class="profile__header-name">Иван</h3>
      <div class="data-profile">
        <ul class="data-profile__list">
        {{{Field 
          id="email" 
          type="email" 
          label="Почта" 
          name="email" 
          value="pochta@yandex.ru" 
          editable=${false}
        }}}
        {{{Field 
          id="login" 
          type="text" 
          label="Логин" 
          name="newPassword" 
          value="ivanivanov" 
          editable=${false}
        }}}
        {{{Field 
          id="name" 
          type="text" 
          label="Имя" 
          name="oldPassword" 
          value="Иван" 
          editable=${false}
        }}}
        {{{Field 
          id="second-name" 
          type="text" 
          label="Фамилия" 
          name="newPassword" 
          value="Иванов" 
          editable=${false}
        }}}
        {{{Field 
          id="chat-name" 
          type="text" 
          label="Имя в чате" 
          name="oldPassword" 
          value="Иван" 
          editable=${false}
        }}}
        {{{Field 
          id="phone" 
          type="tel" 
          label="Телефон" 
          name="newPassword" 
          value="+7 (909) 967 30 30" 
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
