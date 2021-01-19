import React from 'react';
import { Switch, Route } from "react-router-dom";
import Container from '../Components/Container'

const Main = () => {
    return ( 
        <main>
        <Switch>
            <Route exact path="/" component={Container} />
        </Switch>
        </main>
     );
}
 
export default Main;