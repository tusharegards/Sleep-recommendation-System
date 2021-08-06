import React, { Component } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import Spinner from "components/spinner/Spinner"




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:"",
      password: "",
      token: "",
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
  handleSubmit = async(e) => {
    this.setState({loading:true})
    console.log("inside handler");
    // get our form data out of state
    const {  email, password ,  } = this.state;

    try{
      const res = await fetch('http://localhost:5000/api/auth',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
      const responseData = await res.json();
      console.log(responseData)
      this.setState({token:responseData.token})
      
    }catch(err){
      console.log(err)
    }
    this.setState({loading: false})
  };

  

  render() {
    let tag;
    if(this.state.loading){
      tag=<Spinner/>
    }else{
      tag="LOGIN"
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
                  <Form onSubmit={this.handleSubmit} className="register-form">
                  
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
                      Login
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

export default Login;
