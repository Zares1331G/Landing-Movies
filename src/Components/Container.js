import React from 'react';
import Cards from './Cards';

class Container extends React.Component{
    state = { movies : null };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(movies => this.setState({ movies }))
    }
    render(){
        console.log(this.state.movies);
        return (
            <div>
                {!this.state.movies ? 'Loading...' :
                this.state.movies.results.map((movie, index)=>{
                    return (
                        <div className="container" key={index}>
                            <div className="row">
                                <Cards 
                                img={movie.poster_path}
                                title={movie.original_title}
                                date={movie.release_date}
                                />   
                            </div>
                            
                        </div>
                    )                        
                })}                
            </div>
        )
    };
}
export default Container