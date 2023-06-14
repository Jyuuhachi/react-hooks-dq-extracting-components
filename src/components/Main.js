import Section from "./Section"
function Main({messages}) {

    return(
        <main>
        <h2>Messages</h2>
            <Section messages={messages}/>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    )
}
export default Main