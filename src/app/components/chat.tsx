import React, { useState } from 'react';
import PromptInput from './promptinput';
import MessageDisplay from './messagedisplay';
import { Flex, Box, VStack } from '@chakra-ui/react';
import { Message } from './types';  // Ensure this path matches where your Message type is defined

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (prompt: string) => {
    const currentTime = new Date().toISOString(); // Current time as ISO string for the timestamp
    setIsLoading(true);
    // Append new sent message with timestamp
    setMessages(prevMessages => [...prevMessages, { type: 'sent', text: prompt, timestamp: currentTime }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred while fetching the data');
      }
      // Append new received message with timestamp
      setMessages(prevMessages => [...prevMessages, { type: 'received', text: data.data, timestamp: currentTime }]);
    } catch (err) {
      // Error handling could be improved here if needed
      console.error("Error sending message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack spacing={0} height="90vh">
      <Flex flex="1" w="80%" p="2" direction="column" overflow="hidden">
        <MessageDisplay messages={messages} />
      </Flex>
      <Box p="2" bg="white" w="90%">
        <PromptInput onSubmit={handleSendMessage} isLoading={isLoading} />
      </Box>
    </VStack>
  );
};

export default Chat;
