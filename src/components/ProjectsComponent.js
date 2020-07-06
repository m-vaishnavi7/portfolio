import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProject({ project, onClick }) {
    return (
    <>
      <Card className="col-12" style={{border: "none"}}>
            <div className="row">
                <div className="col-sm-4">
                    <Link to={`#`} >
                        <CardImg width="100%" height="200px" className="border" src={project.image} alt={project.name} />
                    </Link>
                </div>

                <div className="col-sm-8">
                    <CardBody>
                        <CardTitle style={{fontWeight: "bold"}}>{project.name}</CardTitle>
                        {project.description}<br/>
                        <div className="col-4 offset-8 col-md-2 offset-md-10">
                            <a href={project.github} target="_blank">Github</a>
                        </div>
                    </CardBody>
                </div>
            </div>
      </Card>
      <br/>
      </>
    );
  }

  const Projects = (props) => {
    
    const menu = props.projects.map((project) => {
        return (
          <div key={project.id}>
            <RenderProject project={project}/>
          </div>
        );
      });

        return (
            <div>
                <div className="masthead bg-overlay">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-12 text-center">
                            <br/><br/>
                            <h1>Projects</h1>
                            <br/><br/>
                            <p className="col-md-6 offset-md-3">I am a Computer Science graduate from Mahatma Gandhi Institute of Technology. 
                            </p><br/>
                            <a type="button" className="btn btn-info btn-lg" href="#projects">Projects</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container" id="projects">
                    <div className="page-header">
                        <br/>
                        <h2>Projects</h2>
                    </div>
                    <hr/><br/>
                    <div class="row">
                        {menu}
                    </div>
                </div>
                </div>
            
        );
    
}

export default Projects;