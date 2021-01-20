import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import ReactPlayer from 'react-player';


const Details = ({img,title,genreId,date,overview,popularity,video,casting}) => {

const baseImageUrl = `https://image.tmdb.org/t/p/w300${img}`;
const vid = video[0].key;
const videoYT = `https://www.youtube.com/watch?v=${vid}`;
const genre = genreId.map(genre => (genre.name + " "));
const actors= casting.filter(cast => cast.known_for_department === "Acting").slice(0, 10).map(casts => (casts.name + ", "));


    return (
            <div className="details">
                <div className="container">
                   <div className="row card-detail">
                        <div className="col-sm-12 d-flex justify-content-between">
                            <img className="photos" src={baseImageUrl}/>
                            <ReactPlayer url={videoYT} width="100%" height="500px"/>
                        </div>             
                    </div>      
                </div>                          
                <strong>{title}</strong>
                <p>{genre}</p> 
                <p>{date}</p>
                <p><ion-icon name="eye-outline"></ion-icon>  {popularity}</p>
                <p>{overview}</p>
                <strong>Main Cast</strong>
                <p>{actors}</p>
            </div>
    );
}
 
export default Details;