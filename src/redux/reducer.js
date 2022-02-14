import { actions } from "./consts"

const INTIAL_STATE = {
  isloggedIn: false,
  userName: '',
  todos: [],
}

const reducer = (state = INTIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case actions.LOGIN_SUCCESS: return {
      ...state,
      isloggedIn: true,
      userName: payload.userName,
    }

    case actions.CREATE_TASK: return {
      ...state,
      todos: [...state.todos, payload]
    }

    case actions.EDIT_TASK: return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo = {...payload}
        }

        return todo;
      })
    }

    case actions.COMPLETE_TASK: return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.isDone = true;
        }

        return todo;
      })
    }

    case actions.DELETE_TASK: return {
      ...state,
      todos: [...state.todos.filter(todo => todo.id !== payload.id)]
    }

    case actions.LOGOUT: return {
      ...state,
      isloggedIn: false,
      userName: ''
    }
    
    default: return state;
  }
}

export default reducer;