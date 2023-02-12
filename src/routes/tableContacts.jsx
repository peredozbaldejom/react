import { Form, useLoaderData, useFetcher, NavLink } from "react-router-dom";
import { getContact } from "../contacts";
import { updateContact } from "../contacts";


// export async function loader({ params }) {
//     const contact = await getContact(params.contactId);
//     if (!contact) {
//         throw new Response('', {
//             status: 404,
//             statusText: 'Not found',
//         });
//     }
//     return contact;
// }

export async function action ({ request, params }) {
    let formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get('favorite') === 'true',
    }) 
}

export default function TableContacts() {
    const { contacts } = useLoaderData();

    
  
  return (
    <nav className="tableDepartment">
        <Form 
            method="post"
            >
             <button type="submit">New</button>
        </Form>
        {contacts.length ? (
            <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <NavLink 
                        to={`/contacts/${contact.id}`}
                        className={({ isActive, isPending}) => isActive ? 'active' : isPending ? 'pending' : ''}
                    >    
                        {contact.first || contact.last ? (
                            <>
                                {contact.first} {contact.last}
                            </>
                        ) : (
                            <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
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
)}