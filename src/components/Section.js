import Message from "./Message"
function Section({messages}) {

    return(
        <section className="messages">
        <ul>
        {messages.map(message=><Message key={message.id}type={message.type} name={message.name} content={message.content} />)}
        </ul>
      </section>
    )
}
export default Section