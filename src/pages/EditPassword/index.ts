import Block from '../../core/Block';
import '../Profile/style.scss';

class EditPassword extends Block {
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
            <li class="data-profile__list-item">
             <label class="label" for="oldPassword">Старый пароль</label>
             <input class="input" type="password" id="oldPassword" value="123456789"/>
           </li>
            <li class="data-profile__list-item">
             <label class="label" for="newPassword">Новый пароль</label>
             <input class="input" type="password" id="newPassword" value="00123456789"/>
           </li>
           <li class="data-profile__list-item">
             <label class="label" for="repeatNewPassword">Повторите новый пароль</label>
             <input class="input" type="password" id="repeatNewPassword" value="00123456789"/>
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
}

export default EditPassword;
