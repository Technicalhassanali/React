import React,{useEffect, useState} from 'react'

import {useGetUserUsingIDQuery} from "../../services/Todos";

export default function FetchAllUser() {
    const[id,setID] = useState();
    const[user,setUser] = useState([]);
    const[showData,setShowData] = useState(false);

    const { data, error, status, isLoading } = useGetUserUsingIDQuery(id, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
      });


    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(id);
        error?console.log(error):data?console.log(data):null;
        setUser(data);
        setShowData(true);
    }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Fetch User Data Using ID</h1>
        <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <input type="number" name="id" id="id" onChange={(e)=>setID(Number(e.target.value))}/>
        <button type="submit">Submit</button>
        </form>
        {
            showData? <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>usename</th>
                <th>Email Address</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <span>
                        {user.address.street},{user.address.city}
                      </span>
                    </td>
                    <td>{user.phone}</td>
                    <td>
                      <a href={`https://${user.website}`} target="_blank">
                        {user.website}
                      </a>
                    </td>
                  </tr>
            </tbody>
          </table>:<div style={{fontSize:"2rem",textAlign:"center",marginTop:"2rem",fontWeight:"bold",color:"green"}}>Please Enter Valid ID</div>
        }
    </div>
  )
}
