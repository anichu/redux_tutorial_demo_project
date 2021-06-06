import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'


function CakeContainer(props) {
  console.log('props', props)
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>   
    </div>
  )
}

const mapStateToProps = state =>{
  console.log('state',state)
  return {

    numOfCakes:state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  
  console.log('dispatch',dispatch);

  return {
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)