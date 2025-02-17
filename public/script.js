const socket = io();
let currentRoom = '';

function joinRoom() {
    const username = document.getElementById('username').value;
    const room = document.getElementById('room').value;
    
    if (!username || !room) return;
    
    socket.emit('joinRoom', { username, room });
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('chatContainer').style.display = 'flex';
    document.getElementById('currentRoom').textContent = room;
    currentRoom = room;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        socket.emit('sendMessage', message);
        input.value = '';
    }
}

socket.on('message', ({ user, text, time }) => {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `
        <strong>${user}</strong> 
        <span class="time">${time || ''}</span>
        <p>${text}</p>
    `;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

socket.on('updateUsers', (users) => {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = users.map(user => `<li>${user}</li>`).join('');
});

function toggleEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

function insertEmoji(emoji) {
    const input = document.getElementById('messageInput');
    input.value += emoji;
    input.focus();
}

// Handle Enter key
document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});