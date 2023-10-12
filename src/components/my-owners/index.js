import BaseComponent from '../../utils/base-component';
import content from './index.html';
import './my-owners.css';

export default class MyOwnersPage extends BaseComponent {
  constructor(parentNode) {
    super({
      parentNode,
      className: 'my-owners',
      content,
    });
  }
}
