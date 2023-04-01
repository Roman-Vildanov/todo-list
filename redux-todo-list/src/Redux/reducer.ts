import { Todo, TodosState, TodoActionTypes, ADD_TODO, TOGGLE_TODO, DELETE_TODO, FILTER_TODOS } from "../Models/types";

const initialState: TodosState = {
  todos: [],
  filteredTodos: [],
};

const todosReducer = (state = initialState, action: TodoActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        filteredTodos: [...state.filteredTodos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
        filteredTodos: state.filteredTodos.map((todo: Todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
        filteredTodos: state.filteredTodos.filter((todo: Todo) => todo.id !== action.payload),
      };
    case FILTER_TODOS:
      const query = action.payload.toLowerCase();
      const filteredTodos = state.todos.filter((todo: Todo) =>
        todo.title.toLowerCase().includes(query)
      );
      return {
        ...state,
        filteredTodos,
      };
    default:
      return state;
  }
}

export default todosReducer;
