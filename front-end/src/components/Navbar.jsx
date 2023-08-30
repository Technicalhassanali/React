import React, { useEffect } from 'react'
import { Link } from 'react-router-dom' 
import useUser from '../Hooks/useUser';

// import { useContext } from 'react';
// import { ThemeContext } from '../context/StateContexts';
import {useUserContext} from '../context/UserContexts';
export default function Navbar() {
    // const[user] = useUser();
    const { user, logout } = useUserContext();

  return (
    <>
   <header>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      {
        user ? <>
        <Link to="user">User Info Page</Link>
        <Link onClick={()=>logout()}>Logout</Link>
        <Link to={`user/${user.id}`}><button type='button' style={{cursor:'pointer'}}>{user.name}</button></Link>
        </> : <Link to="login">Login</Link>
      }
    </header>
    </>
  )
}
