import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class Home extends Component {
    
    render() {
        return (
            <div>
                <div className="masthead bg-overlay">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <br/><br/>
                            <h1>Vaishnavi Madhavaram</h1>
                            <br/><br/>
                            <p className="col-md-6 offset-md-3">I am a Computer Science graduate from Mahatma Gandhi Institute of Technology. 
                            This portfolio consists of all the projects I have done and all the accomplishments 
                            I have achieved.</p><br/>
                            <a type="button" className="btn btn-info btn-lg" href="#about">About Me</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container" id="about">
                    <div className="page-header">
                        <br/>
                        <h2>About Me</h2>
                    </div>
                    <hr/><br/>

                    <div className="row">
                        <div className="col-10 col-md-3">
                            <Card>
                                <CardImg width="100%" src="assets/me.jpeg"/>
                            </Card>
                        </div>
                        <div className="col-12 col-md-9">
                        <p>I intend to be a part of organization where I can constantly learn and develop my technical and
management skills and make best use of it for the growth of the organization. I look forward of
establishing myself by adapting new technologies as well. I want to pursue a challenging career and be
part of a progressive organization that gives scope to enhance my knowledge, skills and to reach the
pinnacle in the computing field with sheer determination, dedication and hard work.</p>
                        </div>
                    </div>
                </div>
                </div>
            
        );
    }
    
}

export default Home;