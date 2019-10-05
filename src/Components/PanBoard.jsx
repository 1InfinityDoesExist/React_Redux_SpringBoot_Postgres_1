import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardHeader,
  Row,
  Col,
  Button,
  Container,
  Badge,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProject } from "../Actions/projectTaskActions";
import PanCardItem from "./PanCardComponent/PanCardItem";

class PanBoard extends Component {
  componentDidMount() {
    this.props.getAllProject();
  }
  render() {
    const { project_tasks } = this.props.project_tasks;
    let maleList = [];
    let femaleList = [];
    let transList = [];

    const projectBoard = project_tasks => {
      if (project_tasks.length <= 0) {
        return (
          <Alert tag="h5" className="text-danger">
            Sorry No Data Found{" "}
          </Alert>
        );
      } else {
        const task = project_tasks.map(project_task => (
          <PanCardItem key={project_task.id} project_task={project_task} />
        ));

        for (let iter = 0; iter < task.length; iter++) {
          if (task[iter].props.project_task.gender === "MALE") {
            maleList.push(task[iter]);
          }
          if (task[iter].props.project_task.gender === "FEMALE") {
            femaleList.push(task[iter]);
          }
          if (task[iter].props.project_task.gender === "TRANSGENDER") {
            transList.push(task[iter]);
          }
        }
      }

      return (
        <React.Fragment>
          <Container>
            <Button color="primary" tag="a" href="/addPanCard">
              Add Pan
            </Button>

            <br></br>
            <Row>
              <Col sm="4">
                <Card className="bg-dark">
                  <CardHeader className="text-primary">
                    <h5>
                      <strong>
                        MALE <Badge color="success">{maleList.length}</Badge>
                      </strong>
                    </h5>
                  </CardHeader>
                </Card>
                {maleList}
              </Col>
              <Col sm="4">
                <Card className="bg-dark">
                  <CardHeader className="text-primary">
                    <h5>
                      <strong>
                        FEMALE{" "}
                        <Badge color="success">{femaleList.length}</Badge>
                      </strong>
                    </h5>
                  </CardHeader>
                </Card>
                {femaleList}
              </Col>
              <Col sm="4">
                <Card className="bg-dark">
                  <CardHeader className="text-primary">
                    <h5>
                      <strong>
                        TRANSGENDER{" "}
                        <Badge color="success">{transList.length}</Badge>
                      </strong>
                    </h5>
                  </CardHeader>
                </Card>
                {transList}
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    };

    projectBoard(project_tasks);
    return (
      <React.Fragment>
        <Container>
          <Button color="primary" tag="a" href="/addPanCard">
            Add Pan
          </Button>

          <br></br>
          <Row>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-primary">
                  <h5>
                    <strong>
                      MALE <Badge color="success">{maleList.length}</Badge>
                    </strong>
                  </h5>
                </CardHeader>
              </Card>
              {maleList}
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-primary">
                  <h5>
                    <strong>
                      FEMALE <Badge color="success">{femaleList.length}</Badge>
                    </strong>
                  </h5>
                </CardHeader>
              </Card>
              {femaleList}
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-primary">
                  <h5>
                    <strong>
                      TRANSGENDER{" "}
                      <Badge color="success">{transList.length}</Badge>
                    </strong>
                  </h5>
                </CardHeader>
              </Card>
              {transList}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

PanBoard.propTypes = {
  getAllProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project_tasks: state.project_tasks
});
export default connect(
  mapStateToProps,
  { getAllProject }
)(PanBoard);
