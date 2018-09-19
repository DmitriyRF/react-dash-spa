import dataProjects from '@/data/projects.json';
import { INIT_PROJECTS } from '../actionType';

export const getProjects = state => ({
  projects: state.projects,
  currentCompany: state.company.current
});

export const InitProjects = () => {
  return {
    type: INIT_PROJECTS,
    payload: dataProjects
  };
};
