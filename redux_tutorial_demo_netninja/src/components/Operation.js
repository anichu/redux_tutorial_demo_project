import React from 'react'
import {increment,decrement} from '../redux/operation/operationAction'
import {connect} from 'react-redux'
function Operation() {
  return (
    <div style={{}}>
    <br/><br/>
     <button >+</button>
     <h2>10</h2>
     <button>-</button>      
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    
  }
}


export default connect()(Operation)
