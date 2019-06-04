const routes = {
  home: '/',
  createUser: '/new-user/:form',
  listOfUsers: '/users',
  viewUser: '/users/:id',
  editUser: '/users/:id/:form',
  notFound: '/404',
  serverError: '/500',
  other: '*',
};

export enum Forms {
  account = 'account',
  profile = 'profile',
  contacts = 'contacts',
  capabilities = 'capabilities',
}

export interface Params {
  form: Forms;
}

export default routes;
