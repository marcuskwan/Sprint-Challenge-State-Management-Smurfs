// action names
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILED = "EDIT_FAILED";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILED = "DELETE_FAILED";

export const initialState = {
  data: [],
  error: "",
  isFetching: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return {
        ...state,
        data: [],
        error: "",
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        isFetching: false,
      };
    case FETCH_FAILED:
      return {
        ...state,
        data: [],
        error: "Failed to fetch",
        isFetching: false,
      };
    case ADD_START:
      return {
        ...state,
        data: [],
        error: "",
        isAdding: true,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        isAdding: false,
      };
    case ADD_FAILED:
      return {
        ...state,
        error: "Failed to Add",
        isAdding: false,
      };
    case EDIT_START:
      return {
        ...state,
        data: [],
        error: "",
        isEditing: true,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        isEditing: false,
      };
    case EDIT_FAILED:
      return {
        ...state,
        error: "Failed to delete",
        isEditing: false,
      };
    case DELETE_START:
      return {
        ...state,
        data: [],
        error: "",
        isDeleting: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        data: payload,
        error: "",
        isDeleting: false,
      };
    case DELETE_FAILED:
      return {
        ...state,
        error: "Failed to delete",
        isDeleting: false,
      };
    default:
      return state;
  }
};
