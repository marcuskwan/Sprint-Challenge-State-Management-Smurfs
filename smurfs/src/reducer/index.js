// action names
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILED = "DELETE_FAILED";

export const initialState = {
  data: [],
  error: "",
  isFetching: false,
  isAdding: false,
  isUpdating: false,
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
      const newData = payload;
      return {
        ...state,
        data: newData,
        error: "",
        isAdding: false,
      };
    case ADD_FAILED:
      return {
        ...state,
        error: "Failed to Add",
        isAdding: false,
      };
    default:
      return state;
  }
};
