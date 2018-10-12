import React from 'react'
import {Route,Switch} from 'react-router-dom'
import InicioContainer from './components/Inicio/InicioContainer'
import LoginContainer from './components/Login/LoginContainer'
import SignUpContainer from './components/Signup/SignupContainer'
import EventContainer from './components/Event/EventContainer'
import OrganizerContainer from './components/Organizer/OrganizerContainer'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/inicio" component={InicioContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer}/>
            <Route path="/organizerprofile/:id" component={OrganizerContainer}/> 
            <Route path="/newevent" component={EventContainer}/>
        </Switch>
    )
}

export default Routes