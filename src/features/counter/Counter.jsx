import React, { useEffect,useState } from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './counterSlice';

import styles from './Counter.module.css';

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const[countValue,setCountValue] = useState();

    useEffect(()=>{
        console.log(count);
        setCountValue(count);
    },[count])
  return (
    <div style={{textAlign:"center"}}>
    <h4>Counter</h4>
    <p>{countValue}</p>
    <button className={styles.button} onClick={()=>dispatch(increment())}>Increment</button>
    <button className={styles.button} onClick={()=>dispatch(decrement())}>Increment</button>
    </div>
  )
}
