import BaseComponent from '../utils/base-component';
import content from './index.html';
import './main-page.css';

export default class MainPage extends BaseComponent {
  constructor(parentNode) {
    super({
      parentNode,
      className: 'main',
      content: content,
    });
  }
}