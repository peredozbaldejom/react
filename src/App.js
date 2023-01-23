import React from 'react'
import './App.css';
import { Element} from './compontents/EditingForm'
import { Navbar } from './app/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader } from './routes/contacts';
import EditContact, {action as editAction,} from "./routes/edit"
import { action as destroyAction } from './routes/destroy';


const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      }
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
