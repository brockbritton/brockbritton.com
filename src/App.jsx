
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import PhotographyHome from './components/PhotographyHome.jsx';

function App() {

  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/photography">
            <Route index={true} element={<PhotographyHome />} />
            <Route path="nature" element={<p> Photography Nature </p>} />
            <Route path="urban" element={<p> Photography Urban </p>} />
            <Route path="sports" element={<p> Photography Sports </p>} />
          </Route>
          <Route path="/development">
            <Route index={true} element={<p> Development Overview </p>} />
            <Route index={false} path="the-no-shoelace-place" element={<p> Development The No Shoelace Place</p>} />
            <Route index={false} path="game-solvers" element={<p> Development Game Solvers</p>} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
