import mainContent from './components/main/index.html';
import myOwnersContent from './components/my-owners/index.html';

export class Router {
  constructor(routes, onHashChange, defaultComponent) {
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
  }

  // destroy() {
  //   window.removeEventListener('hashchange', this.onHashChangeHandler.bind(this));
  // }
}

export function createRouter(routerOutlet) {
  return new Router(
    [
      {
        name: 'my-owners',
        content: myOwnersContent,
      },
      {
        name: '',
        content: mainContent, // replace with BaseComponent instance
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
