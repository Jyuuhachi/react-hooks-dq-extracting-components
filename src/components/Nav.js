import Contact from "./Contact"
function Nav({contacts}) {

    return(
        <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
        {contacts.map(contact=><Contact key={contact.id} name={contact.name}/>)}
        </ul>
      </nav>
    )
}
export default Nav