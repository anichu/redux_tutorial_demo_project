import React from 'react'
import {buyIceCream} from '../redux'
import {connect} from 'react-redux'


function IceCream(props) {
  console.log('props', props)
  return (
    <div>
      <h2>Number of icecreams {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>   
    </div>
  )
}

const mapStateToProps = state =>{
  console.log('state',state)
  return {

    numOfIceCreams:state.iceCream.numOfIceCreams
  }
}
const mapDispatchToProps = dispatch =>{
  
  return {
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCream)