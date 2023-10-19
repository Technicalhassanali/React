import React,{useEffect,useState} from 'react'

import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { useGetAllTodosQuery, useGetAllUsersQuery } from "../../services/Todos";


export default function FetchAllUser() {
   // const { data, error, isLoading } = useGetPokemonByNameQuery();

  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // const { todos, todosError,isFetching,status, isTodoLoading } = useGetAllTodosQuery();
  const { data, error, status, isLoading } = useGetAllUsersQuery();

  if(status === "fullfilled") {
    console.log(data);
  }

  useEffect(() => {
    if (status === "fullfilled") {
      console.log(data);
    }
  }, []);

  return (
    <>
     {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px"
            }}
          >
            <div className="loader"></div>
          </div>
        </>
      ) : data ? (
        <>
          <div className={"userData"}>
            <table>
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
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <span>
                          {item.address.street},{item.address.city}
                        </span>
                      </td>
                      <td>{item.phone}</td>
                      <td>
                        <a href={`https://${item.website}`} target="_blank">
                          {item.website}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : null}   
    </>
  )
}
