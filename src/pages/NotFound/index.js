import template from './template.hbs';
import './style.scss';

const NotFound = () => {
  const props = {
    heading: '404',
    subtitle: 'Не туда попали',
  };

  return template(props);
};

export default NotFound;
