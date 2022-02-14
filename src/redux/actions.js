import { actions } from "./consts"

export const login = (user) => {
  return {
    type: actions.LOGIN_SUCCESS,
    payload: {
      userName: user,
    }
  }
}

export const loginUser = (user, password) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(login(user))
    }, 1000)
  }
}

export const createTask = (id, title, body) => {
  return {
    type: actions.CREATE_TASK,
    payload: {
      id,
      title,
      body,
      isDone: false,
    }
  }
}

export const editTask = (id, title, body) => {
  return {
    type: actions.EDIT_TASK,
    payload: {
      id,
      title,
      body,
      isDone: false,
    }
  }
}

export const completeTask = (id) => {
  return {
    type: actions.COMPLETE_TASK,
    payload: {
      id,
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: actions.DELETE_TASK,
    payload: {
      id
    }
  }
}

export const logout = () => {
  return {
    type: actions.LOGOUT
  }
}