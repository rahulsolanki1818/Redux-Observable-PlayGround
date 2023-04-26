export const initialState = {
  status: {
    loading: false,
    completed: false,
    error: false,
  },
}

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'START_LOADING':
      return {
        ...state,
        status: {
          ...state.status,
          loading: payload,
        },
      }
    case 'MARK_COMPLETED':
      return {
        ...state,
        status: {
          ...state.status,
          completed: payload,
        },
      }
    case 'TOGGLE_ERROR':
      return {
        ...state,
        error: payload.error,
      }

    default:
      return state
  }
}

export default todos
