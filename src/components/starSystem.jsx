import { useState } from "react";

function StarSystem() {
  const stars = [1, 2, 3, 4, 5];
  const [starRating,setStarRating]=useState("")
  return (
    <div>
      <div className="star_box">
        {stars.map((star) => {
          return <div onClick={()=>setStarRating(star)} className="fa fa-star checked"></div>;
        })}
      </div>
      <div>
        {starRating}
      </div>
    </div>
  );
}

export default StarSystem;
