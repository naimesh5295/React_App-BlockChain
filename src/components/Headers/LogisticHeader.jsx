import React from "react";
import axios from "axios";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class LogisticHeader extends React.Component {
  constructor(){
    super();
    this.state={
      trucks_len:0,
      truckers_len:0,
      shipment_len:0,
      logistic_id:localStorage.getItem("user_id")
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Logistics/"+(this.state.logistic_id).toString())
      .then(response => {
        console.log("response:",response.data)
        this.setState({
          trucks_len: response.data.truck.length,
          truckers_len:response.data.trucker.length
        });
      })
      axios
      .get("http://localhost:3001/api/org.example.mynetwork.Shipment"+(this.state.logistic_id).toString())
      .then(response => {
        console.log("response:",response.data)
        this.setState({
          trucks_len: response.data.truck.length,
          truckers_len:response.data.trucker.length
        });
      })
      

  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Trucks
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.trucks_len}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                       
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Truckers
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.truckers_len}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                       
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                    
                  </Card>
                </Col>
               
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Performance
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            49,65%
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                  
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default LogisticHeader;
