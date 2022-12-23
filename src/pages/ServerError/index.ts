import template from '../NotFound/template.hbs';
import '../NotFound/style.scss';

const NotFound = () => {
  const props = {
    heading: '500',
    subtitle: 'Мы уже фиксим',
  };

  return template(props);
};

export default NotFound;
