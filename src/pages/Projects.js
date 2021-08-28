import React from "react";
import styled from "styled-components";
////// ****** components ****** /////
import Title from "../components/Title";
import SingleProject from "../components/SingleProject";
import { ProjectsContext } from "../context/ProjectsContext";

const Projects = () => {
  const { projects, isProjectsLoading, isProjectsError } =
    React.useContext(ProjectsContext);

  if (isProjectsLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isProjectsError) {
    return <h3>Error...</h3>;
  }

  return (
    <ProjectsContainer>
      <section className="section">
        <Title title="my projects" />
        <article className="section-center projects-container">
          {projects.map((project, index) => {
            return <SingleProject {...project} key={index} />;
          })}
        </article>
      </section>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  /* .projects-container {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    padding: 8rem;
  } */

  .projects-container {
    padding: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-content: center;
    gap: 9rem;
  }
`;

export default Projects;
