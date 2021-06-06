import {FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST,FETCH_USERS_FAILURE} from './userTypes'
import axios from 'axios'

export const fetchUsersRequest = () =>{
  return{
    type:FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (users) =>{
  return{
    type:FETCH_USERS_SUCCESS,
    payload:users
  }
}

export const fetchUsersFailure = (err) =>{
  return{
    type:FETCH_USERS_FAILURE,
    payload:err
  }
}

export const fetchUser = () =>{

  return (dispatch) =>{
    dispatch(fetchUsersRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        const users = response.data
        dispatch(fetchUsersSuccess(users))

      })
      .catch(err =>{
        const errorMess = err.message
        dispatch(fetchUsersFailure(errorMess))
      })

  }

}