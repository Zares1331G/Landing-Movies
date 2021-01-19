import React from 'react';
import{ Link } from 'react-router-dom';


const Card = ({title, img, date, id}) => {

const baseImageUrl = `https://image.tmdb.org/t/p/w200${img}`;

    return (
        <div className="col-sm-3 d-flex flex-wrap">
            <Link to={`/movie/${id}`}>    
                <div className="card-body">
                    <div>
                        <img className="photos" src={baseImageUrl}/>
                    </div>                    
                    <strong>{title}</strong>
                    <p>{date}</p>   
                </div>
            </Link>                
        </div>       
     );
}
 
export default Card;