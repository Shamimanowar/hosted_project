import React from 'react';
import Home from './Home';
import People from '../body/people/People';
import Resort from '../body/resort/Resort';
import Flower from '../body/flower/Flower';
import About from './About';
import Contact from './Contact'

import { Route, Redirect, Switch } from 'react-router';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' exact component={Home} />
                <Route path='/people' exact component={People} />
                <Route path='/flower' exact component={Flower} />
                <Route path='/resort' exact component={Resort} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
}

export default Body;