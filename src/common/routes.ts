const routes = {
  home: '/',
  createUser: '/add-new-user/step/:step',
  listOfUsers: '/list-of-user',
  viewUser: '/view-user/:id',
  editUser: '/edit-user/:id/step/:step',
  notFound: '/404',
  serverError: '/500',
  other: '*',
};

export enum Steps {
  first = 'first',
  second = 'second',
  third = 'third',
  fourth = 'fourth',
}

export default routes;
