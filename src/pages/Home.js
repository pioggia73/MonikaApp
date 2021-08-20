import React from "react";
// ****** components ***** //
import Background from "../components/Background";
import Overlay from "../components/Overlay";
import Courses from "../components/Courses";
import FeaturedProjects from "../components/FeaturedProjects";
import { CoursesContext } from "../context/CoursesContext";

const Home = () => {
  const { isOpen } = React.useContext(CoursesContext);
  return (
    <main>
      <Background />
      {isOpen ? <Overlay /> : null}
      <Courses />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
