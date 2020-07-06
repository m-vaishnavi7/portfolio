import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PROJECTS } from '../shared/projects';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: PROJECTS
        }
    }

    render() {
        
        return (
            <>
                <Header />
                <Switch>
                <Route path="/home" component= {Home} />
                <Route exact path="/projects" component={() => <Projects projects={this.state.projects} /> } />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        )
    }
}

export default Main;
