import Block from '../../core/Block';
import './style.scss';

class Profile extends Block<{}> {
  static componentName = 'Profile';

  constructor() {
    super();
  }

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
             <a href="/editProfile" class="action">Изменить данные</a>
           </li>
          <li class="profile-actions__list-item">
             <a href="/editPassword" class="action">Изменить пароль</a>
           </li>
           <li class="profile-actions__list-item">
             <a href="/" class="action exit">Выйти</a>
           </li>
         </ul>
       </div>
    </main>
  </div>
    `;
  }
}

export default Profile;
