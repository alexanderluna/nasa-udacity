import { GET_IMAGES, GET_IMAGE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return { ...state, ...action.payload };
    case GET_IMAGES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
