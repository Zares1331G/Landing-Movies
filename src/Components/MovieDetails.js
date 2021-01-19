import React from 'react';
import Details from './Details';


class Description extends React.Component {
    state = { 
        description : null,
        video: null,
        casting : null
    }



    componentDidMount(){
        const movieId = this.props.match.params.id;

        Promise.all([
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json()),
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`).then(res => res.json())
        ]).then(([description,casting,video])=>{
            this.setState({
                description : description,
                casting : casting,
                video : video
            })
        });        
    }    

    render() { 
        const {description, video, casting} =this.state;
        console.log(casting);
        if(!description && !video && !casting){
            return <div>Loading...</div>;
        }else{
          return (
            <div className="container">
                <div>
                   <Details
                    img={description.poster_path}
                    title={description.original_title}
                    genreId={description.genres}
                    date={description.release_date}
                    overview={description.overview}
                    popularity={description.popularity}
                    casting={casting.cast}
                    video={video.results}
                /> 
                </div>                
            </div>
            );  
        }
        
    }
}
 
export default Description;