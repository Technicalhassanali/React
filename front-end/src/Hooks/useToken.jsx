import React,{useState} from 'react'
import {useUserContext} from '../context/UserContexts';
export default function useToken() {
    const{login} = useUserContext();
    const[token,setInternalToken] = useState(()=>{
        return localStorage.getItem('token');
    });
    const setToken = (newToken)=>{
        localStorage.setItem('token',newToken);
        setInternalToken(newToken);
    }
  return ([token,setToken])
}
