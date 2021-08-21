import React from "react";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
//const api_url = "http://localhost:1337";

const api_url = "https://monika-api-1.herokuapp.com";

const SingleProject = (project = []) => {
  const { desc, title, github_url, stack, project_url } = project;
  return (
    <SingleProjectContainer>
      <article className="feature">
        <div className="img-container">
          <img
            src={api_url + project.image.formats.thumbnail.url}
            alt="computers"
            className="project-img"
          />
          <h4>{title}</h4>
        </div>
        <div className="project-info">
          <h4>{title}</h4>
          <p className="project-desc">{desc}</p>
          <div className="projects-links">
            <div className="project-stack">
              {stack.map((item) => {
                return (
                  <span key={item.id} className="single">
                    {item.title}
                  </span>
                );
              })}
            </div>
            <div className="links">
              <a href={github_url} target="_blank " rel="noreferrer">
                <FaGithubSquare />
              </a>
              <a href={project_url} target="_blank" rel="noreferrer">
                <FaShareSquare />
              </a>
            </div>
          </div>
        </div>
      </article>
    </SingleProjectContainer>
  );
};

const SingleProjectContainer = styled.div`
  .feature {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 8.6rem;
    border-radius: 8px;
    padding: 3.2rem;
    box-shadow: 3px 3px var(--color-teal-8), -1em 0 0.4em var(--color-grey-7);
  }

  .img-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 1px solid var(--color-teal-8);
  }

  .img-container:before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--color-teal-8);
    opacity: 0;
    position: absolute;
    transition: all 0.5s linear;
  }

  .img-container:hover:before {
    opacity: 0.9;
    transition-delay: 0.5s;
  }

  .img-container h4 {
    position: absolute;
    font-size: 2.5rem;
    color: var(--color-teal-0);
    transform: translateY(15rem);
    transition: all 0.5s linear;
  }

  .img-container:hover h4 {
    transform: translateY(0);
    transition-delay: 0.5s;
  }

  .img-container img {
    width: 100%;
    display: block;
    opacity: 0.9;
    transition: all 0.5s linear;
  }

  .img-container:hover img {
    transform: rotate(720deg) scale(0);
    opacity: 0;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .project-info h4 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--color-teal-8);
  }

  .project-desc {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .projects-links {
    display: flex;
    justify-content: space-between;
  }

  .project-stack {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
  }

  .single {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--color-teal-8);
    color: var(--color-teal-8);
  }

  .links {
    display: flex;
    gap: 2rem;
    font-size: 2rem;

    svg {
      color: var(--color-teal-8);
      transition: all 0.3s linear;
    }
    svg:hover {
      transform: scale(1.5) rotate(360deg);
    }
  }

  /* .project-img {
    width: 18rem;
    margin-bottom: 2rem;
  }

  .project-info {
    margin-bottom: 3rem;

    p {
      font-size: 0.7rem;
      line-height: 2;
    }
  }

  .projects-links {
    display: flex;
    justify-content: space-between;
  }

  .single {
    background-color: var(--clr-pink);
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    margin-right: 0.5rem;
    border-radius: 10px;
  }

  .links {
    svg {
      display: inline-block;
      color: var(--clr-pink);
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  } */
`;

export default SingleProject;
