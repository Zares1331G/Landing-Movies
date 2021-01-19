import React from 'react';


const Card = ({title,img,date}) => {

const baseImageUrl = `https://image.tmdb.org/t/p/w300${img}`;

    return (
        <div className="col-sm-4 d-flex flex-wrap">
            <div className="card-body">
                <img className="photos" src={baseImageUrl}/>
                <p>{title}</p>
                <p>{date}</p>    
            </div>            
        </div>       
     );
}
 
export default Card;