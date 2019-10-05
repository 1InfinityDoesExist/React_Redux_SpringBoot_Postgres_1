import {
  GET_PROJECT_TASK,
  GET_PROJECT_TASKS,
  DELETE_PROJECT_TASK
} from "../Actions/types";

const inititalState = {
  project_task: {},
  project_tasks: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_PROJECT_TASK:
      return {
        ...state,
        project_task: action.payload
      };
    case GET_PROJECT_TASKS:
      return {
        ...state,
        project_tasks: action.payload
      };

    case DELETE_PROJECT_TASK:
      return {
        ...state,
        project_tasks: state.project_tasks.filter(
          project_task => project_task.id !== action.payload
        )
      };

    default:
      return state;
  }
}
