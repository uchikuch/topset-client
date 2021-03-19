export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "LOGOUT_USER":
      window.localStorage.removeItem("topset_jwt");
      return {
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
