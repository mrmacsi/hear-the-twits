import axios from "axios";
import {
  FETCH_USER,
  FETCH_TWITS,
  FETCH_LOGS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/me");
  //console.log(res)
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchTwits = () => async dispatch => {
  const res = await axios.get("/api/twits");
  //console.log(res);
  dispatch({
    type: FETCH_TWITS,
    payload: res.data
  });
};

export const fetchLogs = () => async dispatch => {
  const res = await axios.get("/api/logs");
  //console.log(res);
  dispatch({
    type: FETCH_LOGS,
    payload: res.data
  });
};

