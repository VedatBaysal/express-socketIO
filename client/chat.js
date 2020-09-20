const socket = io.connect("http://localhost:4000");

const msg = document.getElementById("message");
const title = document.getElementById("title");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", () =>{
    socket.emit('chat',{
        message: msg.value,
        title: title.value
    });
    msg.value = "";
});
socket.on('chat', (data) => {
    feedback.innerHTML = "";
    output.innerHTML += `<p>
    <strong> ${data.title} :</strong> 
    ${data.message}
    </p>`;
});
socket.on('writing', (data) => {
    feedback.innerHTML = `<p>
    <em> ${data} writing...</em>
    </p>`;
});
message.addEventListener('keypress', () => {
    socket.emit('writing', title.value);
});