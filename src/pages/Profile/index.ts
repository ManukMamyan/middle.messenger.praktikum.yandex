import template from './template.hbs';
import './style.scss';

const Profile = () => {
  const props = {
    profile: true,
    back: '/',
  };

  return template(props);
};

export default Profile;
