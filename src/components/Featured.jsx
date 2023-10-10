import React from "react";

export default function Featured() {

  const featured = [
    {
      title:"The Best Platform for Car Rental",
      description:"Ease of doing a car rental safely and reliably. Of course at a low price.",
      background_image:"featured-image-1.jpg"
    },
    {
      title:"Easy way to rent a car at a low price",
      description:"Providing cheap car rental services and safe and comfortable facilities.",
      background_image:"Blue-Raspberry.jpg"
    }
  ]
  return (
    <>
      <div className="featured-container">
        {
          featured.map((current,index)=>{
            return( 
            <div className={`featured-item item${(index+1)}`} key={index} style={{backgroundImage: `url(/images/${current.background_image})`}}>
            <div className="title">{current.title}</div>
            <p className="description">{current.description}</p>
            
            <button>Rental Car</button>
          </div>
            )
          })
        }
      </div>
    </>
  );
}
