import BaseComponent from '../../utils/base-component';
import './sidebar.css';
import content from './index.html';

const sidebar = new BaseComponent({
  className: 'sidebar',
  tag: 'aside',
  content,
});

export default sidebar;