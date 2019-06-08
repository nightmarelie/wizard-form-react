import { reducer as formReducer } from 'redux-form';
import { Action } from '../user/model';
import { Model } from './model';

export const reducer = formReducer.plugin({
  [Model.FORM_NAME]: (state, action) => {
    switch (action.type) {
      case Action.CREATE_SUCCESS:
        return undefined;
      default:
        return state;
    }
  },
});
