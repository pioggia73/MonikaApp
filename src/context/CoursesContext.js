import React from "react";
import { useFetch } from "../utils/UseFetch";
import { courses_url as url } from "../utils/constants";
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
