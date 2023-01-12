import { HomePage } from "./components/homepage";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

let cors = require('cors')
app.use(cors())

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
