import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Domains from './components/DomainsClubs';
import Cultural from './components/Cultural';
import AddClub from './components/AddClub';

function App() {
  return (
    <>
 <Router>
      <NavBar />
      <Routes>
        <Route path="/clubs" element={<Domains />} />
        <Route path="/clubs/cultural" element={<Cultural />} />
        <Route path="/clubs/addclub" element={<AddClub />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
