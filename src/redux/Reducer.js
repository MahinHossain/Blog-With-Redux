import * as Types from "./Types";

const initializitState = {
  // valu: [],
  // cartitem: [],

  isSignIn: false,
  searchInput: "value",
  blogData: "",
  userData: [],
};

function Reducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        valu: action.payload,
      };
      break;

    case Types.IS_SIGN_IN:
      return {
        ...state,
        isSignIn: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default Reducer;
