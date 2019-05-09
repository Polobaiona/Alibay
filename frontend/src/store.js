import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "fetchItems") {
    return { ...state, allItems: action.items };
  }
  if (action.type === "login-success") {
    return { ...state, loggedIn: true };
  }
  if (action.type === "qSearch") {
    return { ...state, querySearch: action.q };
  }
  if (action.type === "all-items") {
    return { ...state, category: undefined };
  }
  if (action.type === "sport") {
    return { ...state, category: "sport" };
  }
  if (action.type === "electronic") {
    return { ...state, category: "electronic" };
  }
  if (action.type === "kitchen") {
    return { ...state, category: "kitchen" };
  }
  if (action.type === "bathroom") {
    return { ...state, category: "bathroom" };
  }
  if (action.type === "pet") {
    return { ...state, category: "pet" };
  }
  if (action.type === "car") {
    return { ...state, category: "car" };
  }
  if (action.type === "other") {
    return { ...state, category: "other" };
  }
  return state;
};

const store = createStore(
  reducer,
  {
    loggedIn: false,
    category: undefined,
    cart: [],
    querySearch: "",
    allItems: undefined
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
