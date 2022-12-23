import template from '../Profile/template.hbs';
import '../Profile/style.scss';

const EditProfile = (): string => {
  const props = {
    editProfile: true,
    back: '/profile',
  };

  return template(props);
};

export default EditProfile;
