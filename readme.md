# Chat App

## Description
This is a real-time chat application that allows users to join different chat rooms and communicate with others. The app is built using **Node.js**, **Express.js**, **Socket.io**, and **HTML/CSS/JavaScript** for the frontend.

## Features
- Join a chat room using a username and room name.
- Real-time messaging using WebSockets.
- Display active users in the chat room.
- Emoji picker for easy emoji insertion.
- System messages for user activity (joining and leaving rooms).

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, Socket.io
- **WebSockets:** Used for real-time communication

## Installation & Setup
### Prerequisites
Make sure you have **Node.js** installed on your system.

### Steps to Run the Application
1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd chat-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the server:**
   ```sh
   node server.js
   ```

4. **Open the application in your browser:**
   Go to `http://localhost:3000`

## File Structure
```
chat-app/
│── public/
│   ├── index.html       # Frontend UI
│   ├── styles.css       # Styling
│   ├── script.js        # Client-side logic
│── server.js            # Backend server and WebSocket logic
│── package.json         # Project dependencies and scripts
```

## How It Works
1. **User Login:**
   - Users enter a username and a room name.
   - The user joins the specified room.

2. **Messaging:**
   - Messages are sent and received in real-time using WebSockets.
   - The chat updates dynamically without requiring a page refresh.

3. **User Management:**
   - The sidebar displays the list of active users in the room.
   - The system notifies when users join or leave the chat.

4. **Emoji Picker:**
   - Clicking on the emoji button opens an emoji picker.
   - Selected emojis are inserted into the message input field.

## Dependencies
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)

## Future Enhancements
- Private messaging between users.
- User authentication with login/logout.
- Persistent chat history using a database.
- More advanced emoji and media sharing features.

## License
This project is licensed under the **ISC License**.

