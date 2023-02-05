import React from 'react'
import './App.css';
import { Element, action as editingAction } from './compontents/EditingForm'
import { Navbar } from './app/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/newRoot';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contacts';
import EditContact, {action as editAction,} from "./routes/edit"
import { action as destroyAction } from './routes/destroy';
import Index from './routes/index';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route 
          index
          element={<Element />} 
          action={editingAction}
        />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

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
