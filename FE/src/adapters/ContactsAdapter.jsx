import { Contact } from "../components/Contact"

import { useContactStore } from "../state/store"
import { AddNewContactComponent } from "../components/AddNewContactComponent"

export const ContactsAdapter = () => {
    const { contactState } = useContactStore()

    console.log(contactState)

    const mappedContact = contactState.map((contact) => {
        return <Contact username={contact.username} lastMessage={contact.lastMessage} tag={contact.tag} room={contact.room} key={contact.tag}/>
    })

    return(
        <div>
            <AddNewContactComponent/>
            {mappedContact}
        </div>
    )
}