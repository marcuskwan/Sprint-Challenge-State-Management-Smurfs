import axios from "axios";

import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED } from "../reducer";

export const isFetching = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("//localhost:3333/smurfs")
    .then(res => {
      console.log("get success:", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILED });
    });
};
