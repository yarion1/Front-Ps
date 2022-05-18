import React, {useState} from "react"
import { FaStar } from "react-icons/fa"
import {Select, Base} from "./StyledStar"

const StarRating = () =>{
    const [rating, setRating] = useState (null)
    const [hover, setHover] = useState (null)

    return(
        <div className="estrelas">
            {[...Array(5)].map((star, i)=>{
                const ratingValue = i +1;

                return( 
                <Base 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                > 
                    <Select/>
                    <FaStar className="star" 
                    color={ratingValue<= (hover || rating) ? "#ffc107" : "#A9A9A9"} 
                    size={30}
                    onMouseEnter={() => setHover (ratingValue)}
                    onMouseLeave={() => setHover (null)}   
                    />               
                 </Base>                
                )})}           
        </div>
    )

}

export default StarRating