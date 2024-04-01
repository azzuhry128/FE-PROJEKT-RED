import { useEffect, useState } from "react"
import callStackLog from "../log/callStackLog"
import Message from "../components/message"
import { useDispatch, useSelector } from "react-redux"

const MessageAdapter = () => {
    const [messages, setMessages] = useState()
    const [loading, setLoading] = useState(true)
    const contactState = useSelector((state) => state.contact)

    useEffect(() => {
        const fetchMessages = async() => {
            try {
                const response = await fetch('/data/messages.json')
                const result = await response.json()
                setMessages(result.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMessages()
    }, [])
    console.log(contactState['contact'])

    if (loading) {
        return null;
    }
    // callStackLog('MessageAdapter')
    return (
        <>
            {
                messages.map((message, index) => {
                    if (message.account_id == contactState['contact']) {
                        return <Message key={index} message={message.content}/>
                    }
                })
            }
        </>
    )
}

export default MessageAdapter