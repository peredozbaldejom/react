import React from 'react'
import './App.css';
import { Element} from './compontents/EditingForm'
import { Navbar } from './app/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return (
    <React.Fragment>
        <RouterProvider router={router} />
        {/* <Navbar />
        <Element /> */}
    </React.Fragment>
  );
}

export default App;
