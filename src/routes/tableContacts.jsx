import { Form, useLoaderData, useFetcher, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { getContact } from "../contacts";
import { updateContact } from "../contacts";
import { useEffect } from "react";


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
    const { contacts, q } = useLoaderData();
    console.log(contacts.map((contact) => console.log(contact.fio)))
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching = 
        navigation.location && 
        new URLSearchParams(navigation.location.search).has('q');

    useEffect(() => {
        document.getElementById('q').value = q;
        });
  
  return (
    <nav className="tableDepartment">
        <div className="titleTable">
            <div>
                <Form id="search-form" role="search">
                    <input
                        id="q"
                        className={searching ? 'loading' : ''}
                        aria-label="Search contacts"
                        placeholder="SePlaarch"
                        type="search"
                        name="q"
                        defaultValue={q}
                        onChange={(event) => {
                            const isFirstSearch = q == null;
                            submit(event.currentTarget.form, {
                                replace: !isFirstSearch,
                            });
                        }}
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={!searching}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>
                </Form>    
                <Form 
                    method="post"
                    className='button_table'
                >
                    <button type="submit">New</button>        
                </Form>
            </div>
            
            <div className="nameCol">
                <h6 className="form_table_p"><p>Дата рождения</p><p>Поступил</p></h6>
            </div>
        </div>
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
                                <div className="liDiv">
                                    <h4>{contact.dateBirth}</h4> 
                                    <h4>{contact.enter}</h4>
                                </div>
                                
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