// action names
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const SET_EDITING_START = "SET_EDITING_START";
export const SET_EDITING_SUCCESS = "SET_EDITING_SUCCESS";

export const CLEAR_EDITING = "CLEAR_EDITING";

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILED = "EDIT_FAILED";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILED = "DELETE_FAILED";

export const initialState = {
  data: [],
  editingSmurf: {},
  message: "",
  error: "",
  isFetching: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log("in reducer's state:", state);
  console.log("in reducer, payload is:", payload);
  switch (type) {
    case FETCH_START:
      return {
        ...state,
        data: [],
        message: "Fetch starting..",
        error: "",
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
        message: "Fetch success!",
        error: "",
        isFetching: false,
      };
    case FETCH_FAILED:
      return {
        ...state,
        data: [],
        message: "Fetch failed :(",
        error: "Failed to fetch",
        isFetching: false,
      };
    case ADD_START:
      return {
        ...state,
        data: [],
        message: "Adding smurf...",
        error: "",
        isAdding: true,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        data: payload,
        message: "Adding successful!",
        error: "",
        isAdding: false,
      };
    case ADD_FAILED:
      return {
        ...state,
        message: "Adding failed :(",
        error: "Failed to Add",
        isAdding: false,
      };
    case SET_EDITING_START:
      return {
        ...state,
        message: "Setting editing smurf...",
        error: "",
        editingSmurf: {},
      };
    case SET_EDITING_SUCCESS:
      return {
        ...state,
        message: "Successfully set editing smurf!",
        error: "",
        editingSmurf: payload,
      };
    case CLEAR_EDITING:
      return {
        ...state,
        message: "Cleared editingSmurf & inputs!",
        editingSmurf: {},
      };
    case EDIT_START:
      return {
        ...state,
        message: "Starting put request...",
        data: [],
        error: "",
        isEditing: true,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        message: "PUT request successful!",
        data: payload,
        error: "",
        isEditing: false,
      };
    case EDIT_FAILED:
      return {
        ...state,
        message: "PUT request failed :(",
        error: "Failed to delete",
        isEditing: false,
      };
    case DELETE_START:
      return {
        ...state,
        message: "Starting delete request...",
        data: [],
        error: "",
        isDeleting: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        message: "Delete request successful!",
        data: payload,
        error: "",
        isDeleting: false,
      };
    case DELETE_FAILED:
      return {
        ...state,
        error: "Delete request failed...",
        isDeleting: false,
      };
    default:
      return state;
  }
};
