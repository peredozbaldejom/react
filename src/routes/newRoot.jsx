import { useEffect } from "react";
import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from '../contacts';

export async function action() {
    console.log('action from root action redirect to edit')
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }){
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    const contacts = await getContacts(q);
    return { contacts, q };
}

export function newAction() {
    return redirect('/tablecontacts')
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();

    return (
      <>
        <div id="sidebar">
            <div className="sidebar_first">
                <h1>my enjoy</h1>
                <div className="search_panel">
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                    
                    <NavLink 
                        to={'tablecontacts'}>
                        <button type='button'>Table
                        </button>
                    </NavLink>            
                </div>
            </div>
          <nav>
            {contacts.length ? (
                <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <NavLink 
                            to={`contacts/${contact.id}`}
                            className={({ isActive, isPending}) => isActive ? 'active' : isPending ? 'pending' : ''}
                        >    
                            {contact.first || contact.last ? (
                                <>
                                    {contact.first} {contact.last}
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                            {contact.favorite && <span>???</span>}
                        </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                    <i>No contacts</i>
                </p>
            )}
          </nav>
        </div>
        <div id="detail"
            className={
                navigation.state === "loading" ? "loading" : ''
            }
        >
            <Outlet />
        </div>
      </>
    );
  }