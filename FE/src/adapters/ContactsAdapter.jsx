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

    // console.log(array)

    // for(let item of array) {
    //     console.log(item.account.username.split('#')[0])
    // }

    // console.log(array[0][1].account.username) to take a contacts name

    // console.log(array)

    const mappedContact = array.map((contact) => {
        // console.log(contact.account_id)
        return <Contact id={contact.account_id} username={contact.account.user.profile_name} lastMessage={contact.lastMessage} tag={contact.account.username.split('#')[1]} room={contact.chatRoom.chat_room_id} key={contact.account.username.split('#')[1]}/>
    })

    return(
        <div>
            <AddNewContactComponent/>
            {mappedContact}
        </div>
    )
}