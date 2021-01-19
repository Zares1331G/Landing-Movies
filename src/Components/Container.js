import React from 'react';
import Card from './Card';

class Container extends React.Component{
    state = { movies : null };

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(movies => this.setState({ movies }))
    }
    render(){
        console.log(this.state.movies);
        const {movies}=this.state;

        const cards = !movies ? "Loading..." : movies.results.map((card, index)=>(
            <Card
                key={index}
                img={card.poster_path}
                title={card.original_title}
                date={card.release_date}
            />
        ));

        return (
            <div className="container">
                <div className="row">{cards}</div>
            </div>
        )
    };
}
export default Container