import React, { Component } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import Spinner from "components/spinner/Spinner"




class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email:"",
      password: "",
      loading:false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  registerUser = async (e) => {
    e.preventDefault()
    this.setState({loading: true})
    console.log("inside registration");
    // get our form data out of state
    const { name, email, password } = this.state;
    try{
      const res = await fetch('http://localhost:5000/api/user',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
      const responseData = await res.json();
      console.log(responseData)
    }catch(err){
      console.log(err)
    }
    this.setState({loading:false})
  };

 
  render() {
  let tag;  
    if(this.state.loading){
      tag = <Spinner/>
    }else{
      tag="welcome"
    }

    return (
      <>
        
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/purple.jpg").default + ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto ">{tag}</h3>
                  <div className="social-line text-center">
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                  <Form onSubmit={this.registerUser} className="register-form">
                  <label>Username</label>
                    <Input
                      name="name" 
                      placeholder="Username"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <label>Email</label>
                    <Input
                      name="email" 
                      placeholder="Email"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <label>Password</label>
                    <Input
                      name="password"      
                      placeholder="Password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    <Button type="submit" value="submit" block className="btn-round" color="warning">
                      Register
                    </Button>
                  </Form>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
              </Col>
              
            </Row>
           
          </Container>
        </div>
      </>
    );
  }
}

export default RegisterPage;
