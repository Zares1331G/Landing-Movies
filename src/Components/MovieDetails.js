import React from 'react';


class Description extends React.Component {
    state = { description : null }

    componentDidMount(){
        const movieId = this.props.match.params.id;
        console.log(movieId);
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(description => this.setState({ description }))
    }

    

    render() { 
        const {description} =this.state;
        const baseImageUrl = `https://image.tmdb.org/t/p/w200${description.poster_path}`;

        if(!description){
            return <div>Loading...</div>;
        }else{
          return (
            <div>{this.state.description.original_title}</div>
            );  
        }
        
    }
}
 
export default Description;