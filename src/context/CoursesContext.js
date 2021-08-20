import React from "react";
import { useFetch } from "../utils/UseFetch";
const url = "http://localhost:1337/courses";

const CoursesContext = React.createContext();

const CoursesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { isCoursesLoading, courses, isCoursesError } = useFetch(url);

  return (
    <CoursesContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        isCoursesLoading,
        courses,
        isCoursesError,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesProvider };
