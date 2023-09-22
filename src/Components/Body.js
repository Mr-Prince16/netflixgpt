import React from 'react';
import Login from './Login';
import Browse from './Browse';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import Error from './Error';
import PlayMovie from './PlayMovie';
const Body = () => {
  
    const appRouter = createBrowserRouter([
{
    path: "/",
    element: <Login/>,
},
{
    path: "/browse",
    element: <Browse/>
},
{
  path: "/error",
  element: <Error/>
},
{
  path: "/browse/:movieId",
  element: <PlayMovie/>
}
    ]);

  
  return (
    <div >
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body