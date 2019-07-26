import axios from "axios";

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILED,
  SET_EDITING_START,
  SET_EDITING_SUCCESS,
  CLEAR_EDITING,
  EDIT_START,
  EDIT_SUCCESS,
  EDIT_FAILED,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILED,
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

export const setEditingStart = () => ({
  type: SET_EDITING_START,
});
export const setEditingSuccess = editingSmurf => ({
  type: SET_EDITING_SUCCESS,
  payload: editingSmurf,
});

export const clearEditing = () => ({type: CLEAR_EDITING})

export const editSmurf = (smurfId, newInfo) => dispatch => {
  dispatch({ type: EDIT_START });
  axios
    .put(`//localhost:3333/smurfs/${smurfId}`, newInfo)
    .then(res => {
      console.log("edit success!", res);
      dispatch({ type: EDIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_FAILED });
    });
};

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`//localhost:3333/smurfs/${smurfId}`)
    .then(res => {
      console.log("delete success!", res);
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_FAILED });
    });
};
