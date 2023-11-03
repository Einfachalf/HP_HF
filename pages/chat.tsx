// pages/chat.tsx

import React from 'react'
import Container from '../components/Container'
import ChatComponent from '../components/chat/ChatComponent'

const ChatPage: React.FC = () => {
  return (
    <Container>
      <h1>Chat</h1>
      <ChatComponent />
    </Container>
  )
}

export default ChatPage
