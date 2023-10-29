export const ContactsAdapter = (contacts) => {
  const mappedContacts = contacts.map((contact) => {
    return <MessageComponent message={contact.username} picture={contact.picture} />
  })

  return (
    <div>
      {mappedContacts}
    </div>
  )
}