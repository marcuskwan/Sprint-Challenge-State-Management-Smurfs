import axios from "axios";

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILED,
} from "../reducer";

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("//localhost:3333/smurfs")
    .then(res => {
      console.log("get success!", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILED });
    });
};

export const addSmurf = newSmurf => dispatch => {
  newSmurf = { ...newSmurf, age: parseInt(newSmurf.age) };
  dispatch({ type: ADD_START });
  axios
    .post("//localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("post success!", res);
      //? what if the post call didn't send back an updated data array?
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILED });
    });
};
