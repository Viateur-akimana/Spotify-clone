export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

export const reducers = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
      case "SET_TOKEN":
        return {
          ...state,
          user: action.token,
        }
      default:
        return state; 
  }
};
