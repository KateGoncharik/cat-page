import BaseComponent from '../../utils/base-component';
import './nav.css';
import content from './index.html';

const nav = new BaseComponent({
  className: 'nav',
  tag: 'nav',
  content,
});

export default nav;