import { createContext, useContext } from "react";

//creating the context API
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//creating the hook for the context API
export const useTodo = () => {
  return useContext(TodoContext);
};

//exporting the context provider
export const TodoProvider = TodoContext.Provider;
