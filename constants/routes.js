export const routesById = {
  '/': {
    path: '/',
    text: 'Index',
    screen: 'index',
  },
  '/about': {
    path: '/about',
    text: 'About',
    screen: 'about',
  },
};

export default [routesById['/'], routesById['/about']];
