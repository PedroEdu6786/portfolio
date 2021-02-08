import { INITIAL_STATE } from '../constants/emailConstants'

export const emailReducer = (state = {}, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: action.value }
    case 'updateStatus':
      return { ...state, status: action.status }
    case 'reset':
    default:
      return INITIAL_STATE
  }
}
