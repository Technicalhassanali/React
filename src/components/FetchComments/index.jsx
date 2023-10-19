import React from 'react'

import {useGetAllCommentsQuery} from "../../services/Todos";

export default function index() {
    const{data,error,isLoading} = useGetAllCommentsQuery();

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
      ) : data?(
        <>
            {
                data.map((current,index)=>{
                    console.log(current)
                    return(

                        <div key={index} className={"userData"} style={{fontSize:"1.9rem",border:"0.2rem solid #f3f3f3",padding:"0.5rem 2rem",borderLeft:"0.4rem solid green",margin:"0.7rem"}}>
                            <div><span><b>ID :   </b></span>{current.id}</div>
                            <div><span><b>Post ID :   </b></span>{current.postId}</div>
                            <div><span><b>Post Name : </b></span>{current.name}</div>
                            <div><span><b>Post Body : </b></span>{current.body}</div>
                            <div><span><b>Post Email :</b></span> {current.email}</div>
                        </div>
                    )
                })
            }
        </>
      ) : null}   
    </>
  )
}
