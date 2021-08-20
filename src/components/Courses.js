import React from "react";
import styled from "styled-components";
import { CoursesContext } from "../context/CoursesContext";
import { FaAngleDoubleRight } from "react-icons/fa";
///////////////////////////////////////////////////////////
import Title from "../components/Title";

const Courses = ({ title }) => {
  const { courses, isCoursesLoading, isCoursesError } =
    React.useContext(CoursesContext);

  const [value, setValue] = React.useState(0);

  if (isCoursesLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isCoursesError) {
    return <h3>Error ...</h3>;
  }

  const courseUnique = [
    ...new Set(
      courses.map((course) => {
        return course.skill_name;
      })
    ),
  ];

  const { desc } = courses[value];

  return (
    <CoursesContainer>
      <article className="section">
        <Title title="my courses" />
        <div className="section-center courses">
          <div className="btn-container">
            {courseUnique.map((course, index) => {
              return (
                <button
                  key={index}
                  className={`courses-btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {course}
                </button>
              );
            })}
          </div>

          <div className="courses-info">
            {desc.map((item) => {
              return (
                <div key={item.id} className="course-description">
                  <FaAngleDoubleRight className="course-icon" />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="info"
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </CoursesContainer>
  );
};

const CoursesContainer = styled.article`
  background: #f0fdf9;
  .courses {
    padding: 5rem 5rem 0 5rem;
    display: grid;
    grid-template-columns: 20vw 1fr;
    grid-gap: 10rem;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5rem;
  }

  .courses-btn {
    display: inline-block;
    background: transparent;
    border: none;
    text-transform: capitalize;
    font-size: 3rem;
    cursor: pointer;
    padding: 0.5rem;
    transition: all 0.3s linear;
    color: var(--color-main-grey);
    letter-spacing: 0.2rem;
  }

  .active-btn {
    color: var(--color-teal-6);
    box-shadow: 0 2px var(--color-teal-6);
  }

  .courses-btn:hover {
    box-shadow: -2px 0 var(--color-teal-6);
  }

  .courses-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .course-description {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  .course-icon {
    font-size: 2rem;
    color: var(--color-teal-6);
  }

  .info {
    color: var(--color-grey-main);
    font-size: 2rem;
    line-height: 2;
  }

  @media (max-width: 50em) {
    .courses {
      width: 80vw;
      /* padding: 5rem 5rem 0 5rem; */
      display: flex;
      flex-direction: column;
    }

    .btn-container {
      flex-direction: row;
      justify-content: space-around;
      gap: 5rem;
    }
  } /*
    .btn-container {
    width: 80vw;
    margin: 3rem auto;
    display: flex;
    justify-content: space-around;
  }

  .courses-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.25rem 0 0.25rem 0.25rem;
    transition: all 0.5s ease-in-out;
    color: var(--clr-black);
    display: block;
  }

  .active-btn {
    color: var(--clr-pink);
    box-shadow: 0 2px var(--clr-pink);
  }

  .course-info {
    width: 80vw;
    margin: 0 auto;
  } */

  /* .course-description {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    //margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.5rem;

    p {
      font-size: 0.8rem;
      cursor: pointer;
    }
  } */

  /* .course-description {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1.5rem;

    a {
      display: block;
      align-self: center;
      flex: 1;
      font-size: 0.8rem;
    }
  }

  .course-description:last-child {
    margin-bottom: 0;
  }

  .course-icon {
    font-size: 1rem;
    color: var(--clr-pink);
  } */

  /* @media screen and (min-width: 992px) { */
  /* .courses {
      width: 70vw;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 10rem;
      padding: 2rem 0;
      background: lavender;
    }

    .btn-container {
      flex-direction: column;
      justify-content: space-around;
      width: auto;
      margin: 1rem 0;
    }

    .courses-btn {
      font-size: 1.8rem;
    }

    .courses-btn:hover {
      box-shadow: -2px 0 var(--clr-pink);
    }

    .active-btn {
      box-shadow: -2px 0 var(--clr-pink);
    }

    .course-info {
      width: auto;
    }

    .course-icon {
      font-size: 1.2rem;
    }
    .course-description p {
      font-size: 1.2rem;
    }*/

  /* .courses {
      display: flex;
      width: 70vw;
      padding: 1rem;
      gap: 9rem;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      width: auto;
    }

    .courses-btn {
      font-size: 1.9rem;
      margin-bottom: 1.2rem;
    }

    .courses-btn:last-child {
      margin-bottom: 0;
    }

    .courses-btn:hover {
      box-shadow: -2px 0 var(--clr-pink);
    }

    .course-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      a {
        font-size: 1.2rem;
      }
    }

    .course-description {
      justify-content: center;
    }
  } */
`;

export default Courses;
