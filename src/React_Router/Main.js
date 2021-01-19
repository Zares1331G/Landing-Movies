import React from 'react';
import { Switch, Route } from "react-router-dom";
import Container from '../Components/Container'
import MovieDetails from '../Components/MovieDetails'

const Main = () => {
    return ( 
        <main>
        <Switch>
            <Route exact path="/" component={Container} />
            <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
        </main>
     );
}
 
export default Main;