export default function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "CREATE_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: [...action.payload],
      };

    case "ADD_FROM_FIREBASE":
      return {
        ...state,
        tasks: action.payload,
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...action.payload],
      };

    default:
      return state;
  }
}
