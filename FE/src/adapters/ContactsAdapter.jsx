import { Contact } from "../components/Contact"
import { useContactStore } from "../state/store"

export const ContactsAdapter = (contactList) => {
    const { contactState, setContactState } = useContactStore()

    console.log(contactState)

    const mappedContact = contactState.map((contact) => {
        return <Contact name={contact.name} tag={contact.tag} key={contact.tag}/>
    })

    return(
        <div>
            {mappedContact}
        </div>
    )
}