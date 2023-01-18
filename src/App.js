import React from 'react'
import './App.css';
import { Element} from './compontents/EditingForm'
import { Navbar } from './app/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contacts';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
    ],
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
