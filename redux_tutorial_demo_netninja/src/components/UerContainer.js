import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux'
function UerContainer({fetchuser,userData}) {
  useEffect(()=>{
    fetchuser()
  },[])
  return userData.loading ? (<h2>Loading</h2>)
  :userData.error?(<h2>userData.error</h2>):(
    <div>
      <h2>User List </h2>
      <div>
        {userData && userData.users &&
        userData.users.map(user =><p>{user.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    userData:state.user 
  }
} 

const mapDispatchToProps = dispatch =>{
  return{
    fetchuser:() =>dispatch(fetchUser())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UerContainer)
