const routes = {
  home: '/',
  createUserBase: '/new-user',
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

export interface CreateUserParams {
  form: Forms;
}

export interface ViewUserParams {
  id: string;
}

export default routes;
