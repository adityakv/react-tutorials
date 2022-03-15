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
  return async dispatch => {
    const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user, password})
  });
  const content = await rawResponse.json();
  dispatch(login(user));
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