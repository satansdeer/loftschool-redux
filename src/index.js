import { combineReducers, createStore } from "redux";

const SET_NAME = "SET_NAME";
const RESET_NAME = "RESET_NAME";

const SET_TITLE = "SET_TITLE";
const RESET_TITLE = "RESET_TITLE";

const initialCourse = {
  title: "",
  students: 0
};

const course = (state = initialCourse, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case RESET_TITLE:
      return { ...state, title: "" };
    default:
      return state;
  }
};

const initialPerson = {
  name: "",
  surname: ""
};

const person = (state = initialPerson, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case RESET_NAME:
      return { ...state, name: "" };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  person,
  course
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const action = { type: SET_NAME, payload: "Maksim" };

export const setName = name => {
  return { type: SET_NAME, payload: name };
};

const resetName = { type: RESET_NAME };

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setName("Mickey Mouse"));
store.dispatch(resetName);
store.dispatch(action);
