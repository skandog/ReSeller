import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: "",
};

const store = configureStore({
  reducer: {
    todos: (state = initialState.todos, action) => {
      switch (action.type) {
        case "ADD_TODO":
          return [...state, action.payload];
        case "DELETE_TODO":
          return state.filter((todo) => todo !== action.payload);
        default:
          return state;
      }
    },
    todo: (state = initialState.todo, action) => {
      switch (action.type) {
        case "UPDATE_TODO":
          return action.payload;
        default:
          return state;
      }
    },
  },
});

export default store;
