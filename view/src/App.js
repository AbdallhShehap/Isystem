import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Layouts from './component/Layouts.js';
import ProductDetails from "./component/ProductDetails.js"
import IMac from './component/IMac.js';
import MacMini from "./component/MacMini .js"
import IPadPro from "./component/IPadPro.js"
import IPad from "./component/IPad.js"
import Carousel from "./component/IPhone.js"
import Watch from "./component/Watch.js"
import Audio from "./component/Audio.js"
import AppleTv from "./component/AppleTv.js"
import Accessories from "./component/Accessories.js"
import ISystemCare from "./component/ISystemCare.js"
import Login from './component/Login.js';
import  Registration from "./component/Registration"
import Home from "./pages/Home.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layouts />} >
              {/* <Route/> */}
                <Route path="productdetails" element={<ProductDetails />} />
                <Route path="home" element={<Home />} />
                <Route path="mac" element={<IMac />} />
                <Route path="macmini" element={<MacMini/>} />
                <Route path="ipadpro" element={<IPadPro />} />
                <Route path="ipad" element={<IPad />} />
                <Route path="iphone" element={<Carousel />} />
                <Route path="watch" element={<Watch />} />
                <Route path="audio" element={<Audio />} />
                <Route path="appletv" element={<AppleTv />} />
                <Route path="accessories" element={<Accessories />} />
                <Route path="isystemcare" element={<ISystemCare />} />
          </Route>
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
