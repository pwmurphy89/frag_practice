// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const fragment = document.createDocumentFragment();
const createMessage = function(text){
    const message = document.createElement("section");
    message.classList = "message";
    message.textContent = text;
    fragment.appendChild(message);
}
createMessage("Hello");
createMessage("I am");
createMessage("your");
createMessage("aunt");
createMessage("Jane");
document.querySelector("#messages").appendChild(fragment);