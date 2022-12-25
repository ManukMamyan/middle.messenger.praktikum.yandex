import Block from '../../core/Block';
import '../Profile/style.scss';

class EditProfile extends Block {

  protected render(): string { 
    return `
  <div class="container-profile">
    <div class="wrapper__action">
      <a class="back" href="{{{back}}}">&#x2190</a>
    </div>
    <main class="content-profile">
      <div class="avatar"></div>
      <h3 class="profile__header-name">Иван</h3>
      <div class="data-profile">
        <ul class="data-profile__list">
           <li class="data-profile__list-item">
             <label class="label" for="email">Почта</label>
             <input class="input" type="email" id="email" value="pochta@yandex.ru"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="login">Логин</label>
             <input class="input" type="text" id="login" value="ivanivanov"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="name">Имя</label>
             <input class="input" type="text" id="name" value="Иван"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="second-name">Фамилия</label>
             <input class="input" type="text" id="second-name" value="Иванов"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="chat-name">Имя в чате</label>
             <input class="input" type="text" id="chat-name" value="Иван"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="phone">Телефон</label>
             <input class="input" type="tel" id="phone" value="+7 (909) 967 30 30"/>
           </li>
        </ul>
      </div>
       <div class="edit-profile-actions">
        <button class="save-button">Сохранить</button>
       </div>
    </main>
  </div>
    `;
  }
};

export default EditProfile;
