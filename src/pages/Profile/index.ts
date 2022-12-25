import Block from '../../core/Block';
import './style.scss';

class Profile extends Block {

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
           <li class="data-profile__list-item">
             <label class="label" for="email">Почта</label>
             <input class="input disabled" type="email" id="email" value="pochta@yandex.ru"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="login">Логин</label>
             <input class="input disabled" type="text" id="login" value="ivanivanov"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="name">Имя</label>
             <input class="input disabled" type="text" id="name" value="Иван"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="second-name">Фамилия</label>
             <input class="input {{#if profile}}disabled{{/if}}" type="text" id="second-name" value="Иванов"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="chat-name">Имя в чате</label>
             <input class="input {{#if profile}}disabled{{/if}}" type="text" id="chat-name" value="Иван"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="phone">Телефон</label>
             <input class="input {{#if profile}}disabled{{/if}}" type="tel" id="phone" value="+7 (909) 967 30 30"/>
           </li>
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
};

export default Profile;
