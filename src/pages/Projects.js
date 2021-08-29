import React from "react";
import styled from "styled-components";
////// ****** components ****** /////
import Title from "../components/Title";
import Overlay from "../components/Overlay";
import SingleProject from "../components/SingleProject";
import Loading from "../components/Loading";
import { ProjectsContext } from "../context/ProjectsContext";
import { CoursesContext } from "../context/CoursesContext";

const Projects = () => {
  const { projects, isProjectsLoading, isProjectsError } =
    React.useContext(ProjectsContext);
  const { isOpen } = React.useContext(CoursesContext);

  if (isProjectsLoading) {
    return <Loading />;
  }
  if (isProjectsError) {
    return <h3>Error...</h3>;
  }

  return (
    <ProjectsContainer>
      {isOpen ? <Overlay /> : null}
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
    gap: 6rem;
    justify-content: center;
  }
`;

export default Projects;
