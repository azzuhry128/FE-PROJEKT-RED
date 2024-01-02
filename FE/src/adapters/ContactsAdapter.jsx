import { Contact } from "../components/Contact"

import { useContactStore } from "../state/store"
import { AddNewContactComponent } from "../components/AddNewContactComponent"

export const ContactsAdapter = () => {
    // const { contactState, setContactState } = useContactStore()

    const array = []

    const contacts = localStorage.getItem('contacts')
    const parsed = JSON.parse(contacts)

    for(let item of parsed) {
        // console.log(item.contact.account.username)
        if(item.is_group_chat === true) {
            console.log('not eligible: ')
        } else {
            array.push(item)
        }
    }

    // for(let item of array) {
    //     console.log(item.account.username.split('#')[0])
    // }

    // console.log(array[0][1].account.username) to take a contacts name

    const mappedContact = array.map((contact) => {
        return <Contact username={contact.account.user.profile_name} lastMessage={contact.lastMessage} tag={contact.account.username.split('#')[1]} room={contact.room} key={contact.tag}/>
    })

    return(
        <div>
            <AddNewContactComponent/>
            {mappedContact}
        </div>
    )
}