import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Layouts from './component/Layouts.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layouts />} >
              {/* <Route/> */}


          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
