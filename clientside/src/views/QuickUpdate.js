import React, { Component } from "react";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Spinner from "components/spinner/Spinner";

export class QuickUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: "",
      sleepRating: "",
      noiseExposure: "",
      screenTime: "",
      waterIntake: "",
      DrugIntake: "",
      sleepScore:"",
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

  dailySleepUpdate = async (e) => {
    
    e.preventDefault();
    const {
      duration,
      sleepRating,
      noiseExposure,
      screenTime,
      waterIntake,
      drugIntake,
      sleepScore,
    } = this.state;

    try{
      const res = await fetch('http://localhost:5000/api/dailySleepUpdate',{
        method:'POST',
        body: JSON.stringify({
          duration: duration,
          sleepRating: sleepRating,
          noiseExposure: noiseExposure,
          screenTime: screenTime,
          waterIntake: waterIntake,
          drugIntake: drugIntake,
        })
      })
      const responseData = await res.json();
     this.setState({sleepScore : responseData})
      console.log(responseData)
    }catch(err){
      console.log(err)
    }
  };

  

  
  

  render() {
    

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
              <Col className="ml-auto mr-auto" lg="12">
                <Card className="card-plain ml-auto mr-auto">
                  <h3 className="title mx-auto ">
                    submit details for quick sleep result
                  </h3>

                  <Form
                    onSubmit={this.dailySleepUpdate}
                    className="register-form"
                  >
                    <Row>
                      <Col className="ml-auto mr-auto" lg="5">
                        <label>Duration</label>
                        <Input
                          name="duration"
                          placeholder="No. of hours of sleep"
                          type="text"
                          value={this.state.duration}
                          onChange={this.handleInputChange}
                        />
                        <label>sleepRating</label>
                        <Input
                          name="sleepRating"
                          placeholder="Rate sleep on scale of 5"
                          type="text"
                          value={this.state.sleepRating}
                          onChange={this.handleInputChange}
                        />
                        <label>noiseExposure</label>
                        <Input
                          name="noiseExposure"
                          placeholder="on scale of 10"
                          type="text"
                          value={this.state.noiseExposure}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col className="ml-auto mr-auto" lg="5">
                        <label>Screen Time</label>
                        <Input
                          name="screenTime"
                          placeholder="in last 24 hours"
                          type="text"
                          value={this.state.screenTime}
                          onChange={this.handleInputChange}
                        />
                        <label>water Intake</label>
                        <Input
                          name="waterIntake"
                          placeholder="in last 24hrs (in ltrs)"
                          type="text"
                          value={this.state.waterIntake}
                          onChange={this.handleInputChange}
                        />
                        <label>DrugIntake</label>
                        <Input
                          name="drugIntake"
                          placeholder="in mg"
                          type="text"
                          value={this.state.drugIntake}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    
                    <Button
                    style={{margin:"20px", width:"250px"}}
                      type="submit"
                      value="submit"
                      block
                      className="btn-round"
                      color="warning"
                    >
                      
                      Quick Update
                    </Button>
                    
                  </Form>
                </Card>
              </Col>
            </Row>
            <blockquote className="blockquote">
        <div className="typography-line">
          <h6>
            <span className="note"><h6>SleepScore</h6></span>
             sleep score = 3.6
          </h6>
        </div>
        <footer className="blockquote-footer">
          <h6 title="source Title" >out of 06</h6>
        </footer>
      </blockquote>
          </Container>
        </div>
      </>
    );
  }
}

export default QuickUpdate;
