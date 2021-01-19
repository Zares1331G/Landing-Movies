import React from 'react';
import Details from './Details';


class Description extends React.Component {
    state = { 
        description : null,
        genre : null
    }

    componentDidMount(){
        const movieId = this.props.match.params.id;
        console.log(movieId);
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(description => this.setState({ description }));

        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(genre => this.setState({ genre }));
    }

    

    render() { 
        const {description} =this.state;        

        if(!description){
            return <div>Loading...</div>;
        }else{
          return (
            <div className="container">
                <div>
                   <Details 
                    id={description.id}
                    img={description.poster_path}
                    title={description.original_title}
                    genre={description.genre_ids}
                    date={description.release_date}
                /> 
                </div>                
            </div>
            );  
        }
        
    }
}
 
export default Description;