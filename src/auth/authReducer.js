import { types } from "../types/types";

export const authReduce = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      };
    case types.logout:
      return {
        ...action.payload,
        loogged: false
      };

    default:
      return state;
  }
};
