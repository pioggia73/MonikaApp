import React from "react";
import { useFetch } from "../utils/UseFetch";
import { projects_url as url } from "../utils/constants";
const ProjectsContext = React.createContext();

const ProjectsProvider = ({ children }) => {
  const { projects, isProjectsLoading, isProjectsError } = useFetch(url);

  return (
    <ProjectsContext.Provider
      value={{ projects, isProjectsLoading, isProjectsError }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
