import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

export default function index() {


  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/find-user">Find User Using ID</Link></li>
            <li><Link to="/fetch-all-user">Fetch All Users</Link></li>
            <li><Link to="/fetch-comments">Fetch Comments</Link></li>
        </ul>
    </nav>
    </>
  )
}
