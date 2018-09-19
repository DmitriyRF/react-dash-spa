import { GET_PROJECTS, ADD_PROJECT, INIT_PROJECTS } from '../actionType';

const projectReduser = (state = [], action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return [...state, action.payload];
    case ADD_PROJECT:
      return [...state, action.payload];
    case INIT_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};
export default projectReduser;
