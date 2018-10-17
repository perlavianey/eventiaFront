import React from 'react'
import {Route,Switch} from 'react-router-dom'
import InicioContainer from './components/Inicio/InicioContainer'
import LoginContainer from './components/Login/LoginContainer'
import SignUpContainer from './components/Signup/SignupContainer'
import EventNewContainer from './components/Event/EventNewContainer'
import EventDetContainer from './components/Event/EventDetContainer'
import OrganizerContainer from './components/Organizer/OrganizerContainer'
import OrganizerProfileContainer from './components/Organizer/OrganizerProfileContainer'
import EventBuyContainer from './components/Event/EventBuyContainer'
import EventDetOrgContainer from './components/Event/EventDetOrgContainer'
import ArticleNewContainer from './components/Article/ArticleNewContainer'
import ArticleDetOrgContainer from './components/Article/ArticleDetOrgContainer'
import MyProfileContainer from './components/Profile/MyProfileContainer'
const Routes = () => {
    return(
        <Switch>
            <Route exact path="/inicio" component={InicioContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer}/>
            <Route exact path="/organizerprofile/:id" component={OrganizerContainer}/> 
            <Route exact path="/organizerprofile/edit/:id" component={OrganizerProfileContainer}/> 
            <Route path="/newevent" component={EventNewContainer}/>
            <Route exact path="/event/:id" component={EventDetContainer}/> 
            <Route exact path="/event/buy/:id" component={EventBuyContainer}/> 
            <Route exact path="/event/org/:id" component={EventDetOrgContainer}/> 
            <Route exact path="/event/:id/newarticle" component={ArticleNewContainer}/>
            <Route exact path="/article/org/:id" component={ArticleDetOrgContainer}/>
            <Route exact path="/myProfile/:id" component={MyProfileContainer}/> 
        </Switch>
    )
}

export default Routes