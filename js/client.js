const socket = io(`http://localhost:8000`)

const sendform = document.getElementById(`sendform`)
const typearea = document.getElementById(`typearea`)
const chatarea = document.getElementsByClassName(`chatarea`)[0]

const append = (msg , position)=>{
    const msgElement = document.createElement(`div`)
    msgElement.innerText = msg
    msgElement.classList.add(`message`)
    msgElement.classList.add(position)
    chatarea.append(msgElement)
};

const name = prompt(`Enter your name to join the hellochat`);
socket.emit(`new-user-joined`, name)

// socket.on()