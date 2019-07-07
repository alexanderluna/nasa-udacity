import _ from 'lodash';
import { GET_IMAGES, GET_IMAGE } from './types';
import { getImageList, getImageById } from '../services';

export const getImages = () => async (dispatch) => {
  let images = await getImageList();
  images = _.mapValues(images, (val, key) => ({ ...val, id: key }));
  dispatch({ type: GET_IMAGES, payload: images });
};

export const getImage = (id) => async (dispatch) => {
  let image = await getImageById(id);
  image = { [id]: { ...image, id } };
  dispatch({ type: GET_IMAGE, payload: image });
};
