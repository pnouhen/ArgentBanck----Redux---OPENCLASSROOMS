import { combineReducers } from 'redux';

// Exemple de réducteurs (reducers)
const exempleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  exemple: exempleReducer, // combine les réducteurs
});

export default rootReducer;
