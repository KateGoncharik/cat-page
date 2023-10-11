import BaseComponent from '../../utils/base-component';
import './footer.css';
import content from './footer.html';

const footer = new BaseComponent({
  className: 'footer',
  tag: 'footer',
  content,
});

export default footer;