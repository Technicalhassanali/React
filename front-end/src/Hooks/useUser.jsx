import React,{useState,useEffect} from 'react';
import useToken from './useToken';

export default function useUser(){
    // Getting Token
    let[token] = useToken();

    const getPayloadFromToken = (token)=>{
        // token consist of three parts 1-key, 2-Payload, 3-Alogrithm
        const encodedPayload = token.split('.')[1];
        // return JSON.parse(atob(encodedPayload));
        return encodedPayload ? JSON.parse(atob(encodedPayload)) : null;
    }
    const[user,setUser] = useState(()=>{
        if(!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(()=>{
        if(!token){
            setUser(null);
        }else{
            setUser(getPayloadFromToken(token));
        }
    },[token]);

    return [user,setUser]
}