import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
<<<<<<< HEAD:frontend/src/store.jsx
  if (action.type === "qSearch") {
    return{...state, querySearch: action.q}
  }
=======
  /* if (action.type === "qSearch") {
    return(...state, querySearch: action.q)
  }*/

>>>>>>> cc638a5ac4ab22fcddac96afe8f1bc9798002cd1:frontend/src/store.js
  return state;
};

const store = createStore(
  reducer,
  { loggedIn: false, querySearch: "" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
