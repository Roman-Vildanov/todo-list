import { TodoActionTypes, ADD_TODO, TOGGLE_TODO, DELETE_TODO, FILTER_TODOS } from "../Models/types";

let nextTodoId = 1;

export const addTodo = (title: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      title,
      completed: false,
    },
  };
}

export const toggleTodo = (id: number): TodoActionTypes => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export const deleteTodo = (id: number): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export const filterTodos = (query: string): TodoActionTypes => {
  return {
    type: FILTER_TODOS,
    payload: query,
  };
}