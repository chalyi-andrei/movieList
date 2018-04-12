// @flow
import { API_REQUEST } from '../../apiAction';
import api from '../../../api';

const LOAD_MOVIES: 'popular/LOAD_MOVIES' = 'popular/LOAD_MOVIES';
const LOAD_MOVIES_SUCCESS: 'popular/LOAD_MOVIES_SUCCESS' = 'popular/LOAD_MOVIES_SUCCESS';
const LOAD_MOVIES_FAILED: 'popular/LOAD_MOVIES_FAILED' = 'popular/LOAD_MOVIES_FAILED';

const ADD_MOVIES: 'popular/ADD_MOVIES' = 'popular/ADD_MOVIES';
const ADD_MOVIES_SUCCESS: 'popular/ADD_MOVIES_SUCCESS' = 'popular/ADD_MOVIES_SUCCESS';
const ADD_MOVIES_FAILED: 'popular/ADD_MOVIES_FAILED' = 'popular/ADD_MOVIES_FAILED';

const initialState = {
  isFetching: false,
  error: null,
  data: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...initialState,
        isFetching: true,
      };

    case ADD_MOVIES:
      return {
        ...state,
        isFetching: true,
      };

    case LOAD_MOVIES_SUCCESS:
      return {
        ...initialState,
        data: action.result.data.results,
      };

    case ADD_MOVIES_SUCCESS:
      return {
        ...initialState,
        data: [...state.data, ...action.result.data.results],
      };

    case LOAD_MOVIES_FAILED:
      return {
        ...initialState,
        error: action,
      };

    case ADD_MOVIES_FAILED:
      return {
        ...state,
        error: action,
      };

    default:
      return state;
  }
}

export function getPopularMovies(): ApiRequest<Array<SomeType>> {
  return {
    type: API_REQUEST,
    types: [LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILED],
    call: () => api().popular.getpopularMovies(),
  };
}

export function addPopularMovies(page): ApiRequest<Array<SomeType>> {
  return {
    type: API_REQUEST,
    types: [ADD_MOVIES, ADD_MOVIES_SUCCESS, ADD_MOVIES_FAILED],
    call: () => api().popular.addPopularMovies(page),
  };
}
