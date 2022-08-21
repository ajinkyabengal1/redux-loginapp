import React from 'react'
import { logout, selectUser } from '../feature/UserSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import '../Logout.css'
import Services from './Services'

const Logout = () => {
 const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) =>{
    e.preventDefault();
     dispatch(logout());
  }

  return (
    <div className='logout'>
      <h1>Welcome <span className='user-name'>{user.name}</span> To Services</h1>
      <button 
    className='logout-btn' 
    onClick={(e)=>handleLogout(e)}>
      Logout
      </button>
      <Services/>
      
    </div>
   
  )
}

export default Logout
