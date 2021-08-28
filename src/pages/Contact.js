import React from "react";
import styled from "styled-components";
import contactBcg from "../assets/ContactImg-2.jpg";
import Title from "../components/Title";
import Overlay from "../components/Overlay";
import { CoursesContext } from "../context/CoursesContext";

const Contact = () => {
  const { isOpen } = React.useContext(CoursesContext);

  return (
    <ContactWrapper>
      {isOpen ? <Overlay /> : null}
      <section className="section contact-section">
        <Title title="contact me" />
        <article className="section-center">
          <form
            className="form-container"
            name="contact"
            netlify
            netlify-honeypot="bot-field"
            hidden
          >
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                id="name"
                className="form-control"
                placeholder="your name ..."
                required
              />
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="your email ..."
                required
              />
              <label htmlFor="email" className="form-label">
                Your email
              </label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                row="25"
                placeholder="your message here ..."
              />
            </div>
            <button type="submit" className="btn btn-submit">
              submit
            </button>
          </form>
        </article>
      </section>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  .contact-section {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.4)
      ),
      url(${contactBcg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 6rem);
  }

  .form-container {
    width: 40vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form-group input[type="text"],
  input[type="text"],
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 2vh 1vw;
    border: none;
    display: block;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-teal-8);
    color: var(--color-grey-main);
    margin-top: 5vh;
    font-family: inherit;

    &:focus {
      outline: none;
      border-bottom: 1px solid var(--color-grey-7);
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.95);
    }
  }

  input:invalid {
    box-shadow: none;
  }

  .btn-submit {
    color: var(--color-teal-0);
    text-transform: uppercase;
    margin: 5vh auto;
  }

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  label {
    font-size: 2vh;
    display: block;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--color-teal-8);
    padding: 2vh 1vw;
  }
`;

export default Contact;
