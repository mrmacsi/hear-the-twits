import { FETCH_LOGS } from "../actions/types";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LOGS: //if action type is FETCH_LOGS return action payload which is res.data that returns from axios request
      return action.payload;
    default:
      return state;
  }
}
