/**
 * @overview Gif reducer.
 */

import { GET_GIFS, FETCH_FAVORITED_GIFS } from '../actions/gifActions';

const initialState =  {
	data: [],
	favorites: []

};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        data: action.payload.data.data
      };
	  case FETCH_FAVORITED_GIFS:
		  var arr =[];
		  for( var i in action.payload ) {
			  if (action.payload.hasOwnProperty(i)){
				  arr.push(action.payload[i]);
			  }
		  }
		  return {
			  ...state, favorites: arr
		  };
    default:
      return state;
  }
}