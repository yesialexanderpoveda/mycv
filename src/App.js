//components react
import React from "react";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import {FormattedMessage} from "react-intl";

//components app
import About from "./pages/About";
import Search from "./components/Detail";
import Language from "./components/languague/language";
import Footer from "./components/footer/footer";
import Projects from "./pages/Projects";

// styles
import "./App.css";
import { H3head, H1head, Navhead, DivHeader } from "./app.style";

// languages


function App() {
  

  return (
    <div className="App">
      <Router>
        <DivHeader>
          <H1head  translate="no" as={Link} to="/">
            HELLO WORLD!
          </H1head>
          <Navhead>
            <H3head as={Link} to="/">
              <FormattedMessage
                id="header.nav"
                defaultMessage="Profile"
              />
            </H3head>
            <H3head as={Link} to="/projects">
            <FormattedMessage
                id="header.navone"
                defaultMessage="Projects"
              />
            </H3head>
          </Navhead>
        </DivHeader>
        <div>
            <Language />
          <Routes className="div" basename="/mycv">
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />}>
              <Route path="detail" element={<Search />} />
            </Route>
          </Routes>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
