import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteProjectTaskById } from "../../Actions/projectTaskActions";

class PanCardItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this, props.project_task.id);
  }

  onClick(pt_id) {
    this.props.deleteProjectTaskById(pt_id);
  }
  render() {
    const { project_task } = this.props;
    let s = "/updatePanCard/" + project_task.id;
    return (
      <React.Fragment>
        <Card className="bg-dark">
          <CardHeader className="text-primary">
            {" "}
            ID: {project_task.id}
          </CardHeader>
          <CardBody>
            <CardTitle className="text-warning">
              {" "}
              PanCard NO: {project_task.panCardNumber}
            </CardTitle>
            <CardSubtitle className="text-warning">
              CreationDate: {project_task.creationDate}
            </CardSubtitle>
          </CardBody>
          <CardFooter>
            <Button color="warning" tag="a" href={s}>
              Update
            </Button>
            <Button color="danger" onClick={this.onClick}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}

PanCardItem.propTypes = {
  deleteProjectTaskById: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteProjectTaskById }
)(PanCardItem);
