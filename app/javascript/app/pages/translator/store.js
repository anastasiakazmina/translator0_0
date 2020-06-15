import { createStore } from 'redux'
import _ from 'lodash';

let defaultStateValue = {
  translationSrcText: '',
  translationDstText: '',
};

function translation(state = {}, action) {
  switch (action.type) {
    case 'SET_TRANSLATION_SRC_TEXT':
      return _.merge(state, { translationSrcText: action.value });
    case 'SET_TRANSLATION_DST_TEXT':
      return _.merge(state, { translationDstText: action.value });
    default:
      return state
  }
}

let store = createStore(translation, defaultStateValue,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log('store changed', store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

// store.dispatch({ type: 'SET_TRANSLATION_SRC_TEXT', value: 'aaaaa' });

