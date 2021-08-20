import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CoursesContext } from "../context/CoursesContext";
import { navLinks, socialLinks } from "../utils/constants";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = React.useContext(CoursesContext);
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
        <div className="sidebar-header">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="sidebar-main">
          <ul className={`${isOpen ? "links" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.id} className="link">
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={`${isOpen ? "sidebar-icons" : ""}`}>
            {socialLinks.map((social) => (
              <li className="icon" key={social.id}>
                <a href={social.url}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    height: 100vh;
    width: 60vw;
    background: var(--clr-pink);
    position: fixed;
    right: 0%;
    top: 0%;
    opacity: 0;
    transform: translateX(100%);
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 2000;
    padding: 3vh 3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 2px solid var(--clr-dirty-blue);
  }

  .show-sidebar {
    transform: translateX(0);
    opacity: 1;
  }

  .close-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    background: transparent;
    border: transparent;
    position: fixed;
    right: 10%;
    top: 5%;
    cursor: pointer;
  }

  .sidebar-header {
    height: 10vw;
  }

  .sidebar-main {
    display: grid;
    place-items: center;
    height: 90vw;
  }

  .links li {
    animation: slideRight 0.75s ease-in-out forwards;
    opacity: 0;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .links li:nth-of-type(1) {
    animation-delay: 2.25s;
  }

  .links li:nth-of-type(2) {
    animation-delay: 1.75s;
  }

  .links li:nth-of-type(3) {
    animation-delay: 1.25s;
  }

  .links li:nth-of-type(4) {
    animation-delay: 0.75s;
  }

  .link a:link,
  .link a:visited {
    font-size: 3.5vh;
    display: block;
    text-align: center;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    margin-bottom: 2vh;
    position: relative;
    padding: 0 0.4rem;
  }

  .link a:link::after,
  .link a:visited:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--clr-dirty-pink);
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    z-index: -1;
  }

  .link a:hover::after,
  .link a:active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  //////////////////////////////   SOCIAL   ICONS

  .sidebar-icons {
    display: flex;
    justify-content: flex-start;
  }

  .sidebar-icons li {
    animation: slideUp 0.5s ease-in-out forwards;
    opacity: 0;
    display: block;
    color: var(--clr-dirty-blue);

    a {
      transition: all 0.6s linear;
      padding: 0 2vw;
    }
  }

  .sidebar-icons li a:hover {
    color: var(--clr-blue);
  }

  @keyframes slideUp {
    0% {
      transform: translateY(20rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 1.75s;
  }

  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 1.25s;
  }

  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }

  .sidebar-icons li a {
    font-size: 2rem;
    color: var(--clr-grey-1);
  }

  @media screen and (min-width: 692px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
