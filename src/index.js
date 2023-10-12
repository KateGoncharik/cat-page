import { createRouter, Router } from './router';
import BaseComponent from './utils/base-component';
import page from './components/page';
import './components/main/main.css';
import './components/my-owners/my-owners.css';
import './components/page/sidebar/sidebar.css';

class App {
  router = Router;

  start(root) {
    root.append(page.header);
    const container = new BaseComponent({
      parentNode: root,
      className: 'container',
    });
    root.append(page.footer);
    if (root) {
      this.router = createRouter(container);
    }
  }
}

const root = new BaseComponent({
  parentNode: document.body,
  className: 'page',
});

const app = new App();
app.start(root);
