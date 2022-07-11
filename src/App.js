//components react
import React, { useContext } from "react";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl";

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
import MessageEn from "./lang/en-US.json";
import MessageEs from "./lang/es-CO.json";
import { langContext } from "./context/langContext";

function App() {
  const contextlanguage = useContext(langContext);

  return (
    <div className="App">
      <Router>
        <DivHeader>
          <H1head as={Link} to="/">
            HELLO WORLD!
          </H1head>
          <Navhead>
            <H3head as={Link} to="/">
              <FormattedMessage
                id="app.welcome"
                defaultMessage="welcome"
                values={{
                  name: "Yesid Poveda",
                }}
              />
            </H3head>
            <H3head as={Link} to="/projects">
              Proyectos{" "}
            </H3head>
          </Navhead>
        </DivHeader>
        <div>
          <div>
            <Language />
            <FormattedDate
              value={Date.now()}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
          </div>

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
