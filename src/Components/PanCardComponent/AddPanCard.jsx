import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Container,
  Button
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProject } from "../../Actions/projectTaskActions";

class AddPanCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panCardNumber: "",
      creationDate: "",
      gender: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const pan = {
      panCardNumber: this.state.panCardNumber,
      creationDate: this.state.creationDate,
      gender: this.state.gender
    };
    this.props.addProject(pan, this.props.history);
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Button color="primary" tag="a" href="/">
            Home
          </Button>

          <Row>
            <Col sm="5"></Col>
            <Col sm="6">
              <h5>
                <strong>Add Pan Details</strong>
              </h5>
            </Col>
          </Row>
          <br></br>

          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col sm="2"></Col>
              <Col sm="2">
                <FormGroup>
                  <Label for="PanCardNumber">
                    <h5>
                      <strong>Pan CardNumber</strong>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="8">
                <FormGroup>
                  <Input
                    type="text"
                    name="panCardNumber"
                    id="panCardNumber"
                    placeholder="Enter Your panCardNumber"
                    value={this.state.panCardNumber}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="2"></Col>
              <Col sm="2">
                <FormGroup>
                  <Label for="creationDate">
                    <h5>
                      <strong>CreationDate</strong>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="8">
                <FormGroup>
                  <Input
                    type="date"
                    name="creationDate"
                    id="creationDate"
                    placeholder="Creation Date"
                    value={this.state.creationDate}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="2"></Col>
              <Col sm="2">
                <FormGroup>
                  <Label for="gender">
                    <h5>
                      <strong>Gender</strong>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="8">
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  placeholder="Gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                >
                  <option>MALE</option>
                  <option>FEMALE</option>
                  <option>TRANSGENDER</option>
                </Input>
              </Col>
            </Row>

            <Row>
              <Col sm="4"></Col>
              <Col sm="2">
                <Button color="primary">Register</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

AddPanCard.propTypes = {
  addProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addProject }
)(AddPanCard);
