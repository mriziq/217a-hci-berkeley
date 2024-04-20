// Chat.tsx
"use client"
import React, { useState } from 'react';
import PromptInput from './promptinput';
import MessageDisplay from './messagedisplay';
import { Flex, Box, Heading, useToast, VStack } from '@chakra-ui/react';

const Chat = () => {
  const [messages, setMessages] = useState<{ type: 'sent' | 'received'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSendMessage = async (prompt: string) => {
    setIsLoading(true);
    setMessages(prevMessages => [...prevMessages, { type: 'sent', text: prompt }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'An error occurred while fetching the data');
      }
      setMessages(prevMessages => [...prevMessages, { type: 'received', text: data.data }]);
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left"
      });
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
