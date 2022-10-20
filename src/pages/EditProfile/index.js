import template from '../Profile/template.hbs';
import '../Profile/style.scss';

const EditProfile = () => {
  const props = {
    edit: true,
    back: '/profile',
  };

  return template(props);
};

export default EditProfile;
