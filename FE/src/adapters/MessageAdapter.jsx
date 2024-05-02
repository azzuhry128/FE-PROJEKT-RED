import { useEffect, useState } from "react"
import callStackLog from "../log/callStackLog"
import Message from "../components/message"
import { useDispatch, useSelector } from "react-redux"

const MessageAdapter = () => {
    const [loading, setLoading] = useState(true)
    const contactState = useSelector((state) => state.contact)
    const messageState = useSelector((state) => state.message)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchMessages = async() => {
            try {
                const response = await fetch('/data/messages.json')
                const result = await response.json()

                const obj = {
                    type: 'FETCH_MESSAGE',
                    payload: result.data
                }
                dispatch(obj)

                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMessages()
    }, [])

    // console.log(messageState.messages)

    if (loading) {
        return null;
    }
    // callStackLog('MessageAdapter')
    return (
        <>
            {
                messageState.messages.map((message, index) => {
                    if (message.account_id == contactState['contact_id']) {
                        return <Message key={index} message={message.content}/>
                    }
                })
            }
        </>
    )
}

export default MessageAdapter