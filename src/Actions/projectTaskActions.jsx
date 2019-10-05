import {
  GET_PROJECT_TASKS,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_ERROR
} from "./types";
import axios from "axios";

export const addProject = (project_task, history) => async dispatch => {
  try {
    await axios.post(
      "http://localhost:8312/api/object/pan/create",
      project_task
    );
    history.push("/");
    dispatch({
      type: GET_ERROR,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error.response.data
    });
  }
};

export const getProjectTaskByID = pt_id => async dispatch => {
  try {
    const res = await axios.get(
      "http://localhost:8312/api/object/pan/get/" + pt_id
    );
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_TASK,
      payload: {}
    });
  }
};

export const getAllProject = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8312/api/object/pan/get");
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_TASKS,
      payload: {}
    });
  }
};

export const deleteProjectTaskById = pt_id => async dispatch => {
  try {
    if (window.confirm("Are You Sure You Really Want To Delete")) {
      await axios.delete(
        "http://localhost:8312/api/object/pan/delete/" + pt_id
      );
      dispatch({
        type: DELETE_PROJECT_TASK,
        payload: pt_id
      });
    }
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: {}
    });
  }
};
