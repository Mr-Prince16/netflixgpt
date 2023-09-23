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
    errorElement: <Error/>
},
{
    path: "/browse",
    element: <Browse/>,
    errorElement: <Error/>
},
{
  path: "/error",
  element: <Error/>,
  errorElement: <Error/>
},
{
  path: "/browse/:movieId",
  element: <PlayMovie/>,
  errorElement: <Error/>
},

    ],
    );

  
  return (
    <div >
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body