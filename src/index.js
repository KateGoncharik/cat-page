import page from './page';
import BaseComponent from './utils/base-component';
import MainPage from './main';

const root = new BaseComponent({
  parentNode: document.body,
  className: 'page',
});

root.append(page.header);
const container = new BaseComponent({
  parentNode: root,
  className: 'container',
})
const main = new MainPage(root);
const sidebar = page.sidebar;
container.append(main);
container.append(sidebar);

root.append(page.footer);