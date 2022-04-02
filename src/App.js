import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="rooms/" element={<Rooms />} />
        <Route exact path="rooms/single-room/:slug" element={<SingleRoom />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
