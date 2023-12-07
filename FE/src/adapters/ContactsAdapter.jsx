import { Contact } from "../components/Contact"

export const ContactsAdapter = (contactList) => {
    const array = [...contactList]

    const mappedContact = array.map((contact) => {
        <Contact name={contact.name} tag={contact.tag}/>
    })

    return(
        {mappedContact}
    )
}