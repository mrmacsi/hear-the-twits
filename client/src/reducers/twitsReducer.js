import { FETCH_TWITS } from "../actions/types";


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TWITS: //if action type is FETCH_TWITS return action payload which is res.data that returns from axios request
      return action.payload;
    default:
      return state;
  }
}
