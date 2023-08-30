import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export default function UpdateForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
let params = useParams();

useEffect(()=>{
fetch(`http://localhost:3000/api/users/${params.id}`,{
    method:'GET'
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
    setName(data.name);
    setPassword(data.password);
}).catch((error) => console.log(error));
},[params.id]);

// useEffect(() => {
//     console.log("Name:", name);
//     console.log("Password:", password);
//   }, [name, password]); // This useEffect will log changes to name and password states




  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, password });


    let dt = {
        name,password
    }
    fetch(`http://localhost:3000/api/update-user/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(dt),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data)).catch((error) => console.log(error));

  };
  return (
    <div style={{ marginTop: "25px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>{" "}
          <input
            type="text"
            name="name"
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>{" "}
          <input
            type="password"
            name="password"
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div><br/>
        <div>
          <button type="submit" disabled={!name || !password}>Submit</button>
        </div>
      </form>
    </div>
  );
}
