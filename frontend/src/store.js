import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  /*if (action.type === "qSearch") {
    return{...state, querySearch: action.q}
  }*/
  if (action.type === "electronics") {
    console.log("state changed to electronics");
    return { ...state, category: "electronics" };
  }
  if (action.type === "cars") {
    return { ...state, category: "cars" };
  }
  if (action.type === "decor") {
    return { ...state, category: "decor" };
  }
  if (action.type === "gardening") {
    return { ...state, category: "gardening" };
  }
  if (action.type === "sports") {
    return { ...state, category: "sports" };
  }
  return state;
};

const store = createStore(
  reducer,
  { loggedIn: false, querySearch: "", category: "" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
