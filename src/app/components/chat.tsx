"use client"

import React, { useState } from 'react';
import { VStack, Flex, Box } from '@chakra-ui/react';
import PromptInput from './promptinput';
import MessageDisplay from './messagedisplay';
import { Message } from './types';
import { useReliabilityStatus } from '../context/ReliabilityStatusContext';  // Ensure the import path is correct

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { color } = useReliabilityStatus(); 

    const handleSendMessage = async (prompt: string) => {
        const currentTime = new Date().toISOString();
        setIsLoading(true);

        setMessages(prevMessages => [...prevMessages, {
            type: 'sent',
            text: prompt,
            timestamp: currentTime,
            sender: 'You',
        }]);

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
                throw new Error(data.error || 'Failed to fetch response from API');
            }
            setMessages(prevMessages => [...prevMessages, {
                type: 'received',
                text: data.data,
                timestamp: currentTime,
                sender: 'ChatGPT',
            }]);
        } catch (error) {
            console.error('API call error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <VStack spacing={1} height="90vh">
            <Flex flex="1" w="90%" p="2" direction="column" overflow="hidden">
                <MessageDisplay messages={messages} chatGPTColor={color} />
            </Flex>
            <Box p="2" bg="white" w="100%">
                <PromptInput onSubmit={handleSendMessage} isLoading={isLoading} />
            </Box>
        </VStack>
    );
};

export default Chat;
