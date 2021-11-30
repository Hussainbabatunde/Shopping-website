import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App1 from './Aboutcomponent/App1';
import Shop from './Shop';
import App2 from './Contactcomponent/App2';
import App6 from './Slideshow/App';
import App3 from './Slideshow/App3';
import App4 from './Slideshow/App4';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Shop />}/>
      <Route path='/about' element={<App1 />} />
      <Route path='/contact' element={<App2 />} />
      <Route path='/bottleslideshow' element={<App3 />} />
      <Route path='/vaseslideshow' element={<App6 />} />
      <Route path='/glasslideshow' element={<App4 />} />
    </Routes>
    </Router>
  );
}


export default App;
