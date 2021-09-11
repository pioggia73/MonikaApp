import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Error from "./pages/ErrorPage";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Sidebar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/projects">
//           <Projects />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//         <Route path="*">
//           <Error />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Suspense>
        </ErrorBoundary>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
