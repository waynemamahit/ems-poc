// src/App.js
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';



const App = () => {


  return (
    <Suspense fallback={"....Loading"} >
    <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
