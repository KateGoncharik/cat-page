import BaseComponent from './utils/base-component';
import mainContent from './components/main/index.html';
import myOwnersContent from './components/my-owners/index.html';

export class Router {
  constructor(root, routes, onHashChange, defaultComponent) {
    this.root = root;
    this.routes = routes;
    this.onHashChange = onHashChange;
    this.defaultComponent = defaultComponent;
    window.addEventListener('hashchange', this.onHashChangeHandler.bind(this));
    this.onHashChangeHandler();
  }

  onHashChangeHandler() {
    const path = window.location.hash.slice(1);
    const route = this.routes.find((r) => r.name === path);
    const wrapper = document.querySelector('.container');
    wrapper.innerHTML = route.content;
    if (route.name === 'my-owners') {
      this.createModal(this.root);
      const modalButton = document.querySelector('.modal-button');
      modalButton.addEventListener('click', () => this.revealModal());
      this.modal.addListener('click', () => this.revealModal());
    }
  }

  createModal(root) {
    this.modal = new BaseComponent({
      parentNode: root,
      className: 'modal-window',
    });
    this.modalContent = new BaseComponent({
      parentNode: this.modal,
      className: 'modal-content',
      content:
        'Привет! Здесь вы можете полюбоваться мной и узнать с кем я живу.',
    });
  }

  revealModal() {
    this.modal.toggleClass('show-modal');
  }
}

export function createRouter(routerOutlet, root) {
  return new Router(
    root,
    [
      {
        name: 'my-owners',
        content: myOwnersContent,
      },
      {
        name: '',
        content: mainContent,
      },
    ],
    (route) => {
      if (route) {
        const container = routerOutlet;
        container.innerHTML = '';
        container.innerHTML = mainContent;
      }
    }
  );
}
