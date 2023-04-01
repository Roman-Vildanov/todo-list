export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  filteredTodos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface FilterTodosAction {
  type: typeof FILTER_TODOS;
  payload: string;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | FilterTodosAction;
