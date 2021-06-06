import {DECREMENT} from './operationTypes'

const initialState = {
  num:10,
}

export const operationReducers = (state = initialState,action) =>{
  switch(action.type){
    case INCREMENT:
      return{
        ...state,
        num:state.num + 1
      }
    
    case DECREMENT:
    return{
      ...state,
      num:state.num - 1
    }   
  }

}