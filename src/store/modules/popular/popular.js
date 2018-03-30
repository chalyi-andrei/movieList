// @flow
import { API_REQUEST } from "../../apiAction";
import api from "../../../api";

const GET_POPULAR_MOVIES: "popular/GET_POPULAR_MOVIES" =
  "popular/GET_POPULAR_MOVIES";
export const GET_POPULAR_MOVIES_SUCCESS: "popular/GET_POPULAR_MOVIES_SUCCESS" =
  "popular/GET_POPULAR_MOVIES_SUCCESS";
const GET_POPULAR_MOVIES_FAILED: "popular/GET_POPULAR_MOVIES_FAILED" =
  "popular/GET_POPULAR_MOVIES_FAILED";

const ADD_POPULAR_MOVIES: "popular/ADD_POPULAR_MOVIES" =
  "popular/ADD_POPULAR_MOVIES";
export const ADD_POPULAR_MOVIES_SUCCESS: "popular/ADD_POPULAR_MOVIES_SUCCESS" =
  "popular/ADD_POPULAR_MOVIES_SUCCESS";
const ADD_POPULAR_MOVIES_FAILED: "popular/ADD_POPULAR_MOVIES_FAILED" =
  "popular/ADD_POPULAR_MOVIES_FAILED";

const initialState = {
  isFetching: false,
  error: null,
  data: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...initialState,
        isFetching: true
      };

    case ADD_POPULAR_MOVIES:
      return {
        ...state,
        isFetching: true
      };

    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...initialState,
        data: action.result.data.results
      };

    case ADD_POPULAR_MOVIES_SUCCESS:
      return {
        ...initialState,
        data: [...state.data, ...action.result.data.results]
      };

    case GET_POPULAR_MOVIES_FAILED:
      return {
        ...initialState,
        error: action
      };

    case ADD_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        error: action
      };

    default:
      return state;
  }
}

export function getPopularMovies(): ApiRequest<Array<SomeType>> {
  return {
    type: API_REQUEST,
    types: [
      GET_POPULAR_MOVIES,
      GET_POPULAR_MOVIES_SUCCESS,
      GET_POPULAR_MOVIES_FAILED
    ],
    call: () => api().popular.getpopularMovies()
  };
}

export function addPopularMovies(page): ApiRequest<Array<SomeType>> {
  console.log("page", page);
  return {
    type: API_REQUEST,
    types: [
      ADD_POPULAR_MOVIES,
      ADD_POPULAR_MOVIES_SUCCESS,
      ADD_POPULAR_MOVIES_FAILED
    ],
    call: () => api().popular.addPopularMovies(page)
  };
}
