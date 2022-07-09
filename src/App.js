import {HashRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import './App.css';
import { H3head, H1head, Navhead, DivHeader } from './app.style';

import About from './pages/About';
import Search from './components/Detail';
import Footer from './components/footer/footer';  
import Projects from './pages/Projects';
function App() {
  return (
    <div className="App">
      <Router >
      <DivHeader> 
      <H1head as={Link} to="/">HELLO WORLD!</H1head>
      <Navhead>
          <H3head as={Link} to="/">Acerca de mi </H3head>
           <H3head as={Link} to="/projects">Proyectos  </H3head>
          </Navhead>
        
        </DivHeader>

        <Routes className="div" basename="/mycv">
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="detail" element={<Search />} />
      
          </Route>
        </Routes>
     </Router>
     <Footer></Footer>
    </div>
  );
}
  
export default App;
