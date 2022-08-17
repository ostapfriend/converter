import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main/Main';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {
  return (
    <Routes>
      <Route path="/converter" element={<Main />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
