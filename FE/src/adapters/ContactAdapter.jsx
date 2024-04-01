import { useEffect, useState } from "react"
import Contact from "../components/Contact"
import callStackLog from "../log/callStackLog"

const ContactAdapter = () => {
    const [contacts, setContacts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchContacts = async() => {
            try {
                const response = await fetch('/data/contacts.json')
                const result = await response.json()
                setContacts(result.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchContacts()
    }, [])

    if (loading) {
        return null
    }

    // callStackLog('ContactAdapter')

    return (
        <>
            {
                contacts.map((contact, index) => {
                    return <Contact key={index} username={contact.username} account_id={contact.account_id}/>
                })
            }
        </>
    )
}

export default ContactAdapter