import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Journey from './pages/Journey';
import Docs from './pages/Docs';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:name" element={<Project />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  )
}

export default App
