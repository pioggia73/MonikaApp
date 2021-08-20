import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../context/ProjectsContext";
import Title from "../components/Title";
import SingleProject from "./SingleProject";

const FeaturedProjects = ({ title }) => {
  const { projects, isLoading, isError } = React.useContext(ProjectsContext);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h3>Sorry, an error...</h3>;
  }

  const tempProjects = projects.filter((project) => project.featured === true);

  return (
    <FeaturedProjectsContainer>
      <section className="section featured">
        <Title title="featured projects" />
        <article className="section-center container">
          {tempProjects.map((project, index) => {
            return <SingleProject {...project} key={index} />;
          })}
        </article>
        <Link to="/projects">
          <button type="button" className="btn btn-all">
            view all
          </button>
        </Link>
      </section>
    </FeaturedProjectsContainer>
  );
};

const FeaturedProjectsContainer = styled.article`
  .featured {
    background: #fdfffe;
  }

  .container {
    padding: 8rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .btn-all {
    display: block;
    margin: 0 auto;
    color: var(--color-teal-0);
    cursor: pointer;
  }
`;

export default FeaturedProjects;
