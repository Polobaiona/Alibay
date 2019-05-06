import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "qSearch") {
    return{...state, querySearch: action.q}
  }
  return state;
};

const store = createStore(
  reducer,
  { loggedIn: false, querySearch: "" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
