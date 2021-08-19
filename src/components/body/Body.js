import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';


import Home from './Home';
import People from '../body/people/People';
import Resort from '../body/resort/Resort';
import Flower from '../body/flower/Flower';
import About from './About';
import Contact from './Contact'
import Login from '../Login/Login';
import Logout from '../Login/Logout';


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}


const Body = props => {
    return (
        <div>
            {props.token === null ?
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Redirect to='/login' />
                </Switch> :
                <Switch>

                    <Route path='/home' exact component={Home} />
                    <Route path='/people' exact component={People} />
                    <Route path='/flower' exact component={Flower} />
                    <Route path='/resort' exact component={Resort} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/logout' exact component={Logout} />
                    <Redirect from='/' to='/home' />
                    <Redirect to='/home' />
                </Switch>
            }
        </div>
    );
}

export default connect(mapStateToProps)(Body);