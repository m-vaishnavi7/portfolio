import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return(
            <div className="masthead bg-overlay">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12">
                            <h1 className="text-center" style={{fontSize: "4vw"}}>Connect with me through mail or you could just leave a feedback right here.</h1>
                        <Form onSubmit={this.handleSubmit} style={{backgroundColor: "white",}} className="col-10 offset-1 col-md-8 offset-md-2 rounded">
                            <br/>
                            <FormGroup row>
                                <Label htmlFor="name" md={{size: 2, offset: 1}} style={{color: "black"}}>Name</Label>
                                <Col md={8}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={{size: 2, offset: 1}} style={{color: "black"}}>Email</Label>
                                <Col md={8}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={{size: 2, offset: 1}} style={{color: "black"}}>Your Feedback</Label>
                                <Col md={8}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="4"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 8, offset: 3}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                            <br/>
                        </Form>
                        </div>
                    </div>
                 </div>
            </div>

        );
    }
    
}

export default Contact;