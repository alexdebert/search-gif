/**
 * Gif reducer.
 */

import { GET_GIFS } from '../actions/gifActions';

const initialState =  {
  data: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        data: action.payload.data.data
      };
    default:
      return state;
  }
}