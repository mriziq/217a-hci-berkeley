import React, { useState } from 'react';
import { VStack, Text, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Message } from './types';
import ClickableAvatar from './clickableavatar';
import Sidebar from './sidebar'; // Ensure you have this Sidebar component

interface MessageDisplayProps {
  messages: Message[];
  chatGPTColor: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages, chatGPTColor }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <VStack
        p="4"
        bg="gray.50"
        height="calc(100vh - 150px)"
        overflowY="auto"
        width="100%"
        spacing="4"
        align="flex-start"
      >
        {messages.map((message, index) => (
          <HStack key={index} align="start" width="100%">
            <ClickableAvatar
              sender={message.sender}
              avatarPath={message.type === 'sent' ? '/path-to-your-avatar.jpg' : '/path-to-chatgpt-avatar.jpg'}
              avatarColor={message.sender === 'ChatGPT' ? chatGPTColor : '#DADADA'}
              onClick={message.sender === 'ChatGPT' ? toggleSidebar : undefined}
            />
            <VStack align="start">
              <Text fontSize="xs" fontWeight="bold">{message.sender}</Text>
              <Text fontSize="sm" whiteSpace="pre-line">{message.text}</Text>
              <Text fontSize="xs" opacity="0.6">{format(new Date(message.timestamp), 'p')}</Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default MessageDisplay;
