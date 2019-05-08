import { createStore } from "redux";
let reducer = (state, action) => {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
<<<<<<< HEAD
  if (action.type === "qSearch") {
    return { ...state, category: action.q };
  }
=======
  /*if (action.type === "qSearch") {
    return{...state, category: action.q}
  }*/
>>>>>>> 541d5551676fa7b247ed945f6bd432bd119a5a9a
  if (action.type === "electronics") {
    console.log("state changed to electronics");
    return { ...state, category: "electronics" };
  }
  if (action.type === "car") {
    return { ...state, category: "car" };
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
  { loggedIn: false, category: undefined, cart: ["hello", "world"] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
