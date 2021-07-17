import axios from "axios";
import * as types from './actionType';

const getUsers = ( users ) => ({
  type: types.GET_USERS,
  payload: users
})

export const loadUsers = () => {
  return async function(dispatch){
    await axios.get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log(res);
        dispatch(getUsers(res.data));
      })
      .catch(error => console.log(error));
  };
};