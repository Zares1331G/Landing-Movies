import React from 'react';

const Details = ({img}) => {
const baseImageUrl = `https://image.tmdb.org/t/p/w400${img}`;

    return (
        <div><img className="photos" src={baseImageUrl}/></div>
    );
}
 
export default Details;