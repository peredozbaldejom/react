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
    console.log(contacts.map((contact) => console.log(contact.fio)))
    
  
  return (
    <nav className="tableDepartment">
        <Form 
            method="post"
            className='button_table'
            >
                <button type="submit">New</button>
                <h6 className="form_table_p"><p>Дата рождения</p><p>Поступил</p></h6>
                
        </Form>
        {contacts.length ? (
            <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <NavLink 
                        to={`/contacts/${contact.id}`}
                        className={({ isActive, isPending}) => isActive ? 'active' : isPending ? 'pending' : ''}
                    >    
                        {contact.fio ? (
                            <>
                                <h4>{contact.fio}</h4>    
                                <h4>{contact.dateBirth}        {contact.enter}</h4>
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