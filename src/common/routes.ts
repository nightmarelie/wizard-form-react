const routes = {
  home: '/',
  createUser: '/add-new-user',
  listOfUsers: '/list-of-user',
  showUser: '/show-user/:id',
  editUser: '/edit-user/:id',
  notFound: '/404',
  serverError: '/500',
  other: '*',
};

export default routes;
