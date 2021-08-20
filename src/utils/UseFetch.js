import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);
  const [isCoursesError, setIsCoursesError] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [isProjectsError, setIsProjectsError] = useState(false);
  const [projects, setProjects] = useState([]);

  const getCourses = useCallback(async () => {
    const response = await fetch(url);
    const courses = await response.json();
    setCourses(courses);
    setIsCoursesLoading(false);
    setIsCoursesError(false);
  }, [url]);

  const getProjects = useCallback(async () => {
    const response = await fetch(url);
    const projects = await response.json();
    setProjects(projects);
    setIsProjectsLoading(false);
    setIsProjectsError(false);
  }, [url]);

  useEffect(() => {
    getCourses();
  }, [url, getCourses]);

  useEffect(() => {
    getProjects();
  }, [url, getProjects]);
  return {
    isCoursesLoading,
    courses,
    isCoursesError,
    projects,
    isProjectsLoading,
    isProjectsError,
  };
};
