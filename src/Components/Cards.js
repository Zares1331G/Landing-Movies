import React from 'react';


const Card = ({title,img,date}) => {

const baseImageUrl = `https://image.tmdb.org/t/p/w300${img}`;

    return (
        <div>
            <img src={baseImageUrl}/>
            <p>{title}</p>
            <p>{date}</p>
        </div>       
     );
}
 
export default Card;