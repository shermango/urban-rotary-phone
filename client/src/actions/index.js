import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  let data;
  try {
    data = await axios.get('/api/current_user');

    return dispatch({ type: FETCH_USER, payload: data });
  } catch (e) {
    console.log(e);
  }
};
