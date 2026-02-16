import React from  'react';
import { Routes } from 'react-router-dom';

function App(){
  return(
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App;
