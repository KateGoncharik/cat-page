import BaseComponent from '../../utils/base-component';
import './header.css';
import content from './header.html';
import nav from '../nav';

const header = new BaseComponent({
  className: 'header',
  tag: 'header',
  content,
});

header.append(nav);

export default header;