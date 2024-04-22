"use client"

import React, { useState, useEffect } from 'react';
import PromptInput from './promptinput';
import MessageDisplay from './messagedisplay';
import { VStack, Flex, Box } from '@chakra-ui/react';
import { Message } from './types';

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [color, setColor] = useState('#74AA9C'); // Initial color

    // Function to determine the color based on some reliability status
    const reliabilityStatus = () => {
        const status = Math.floor(Math.random() * 3); // Generate a status between 0, 1, and 2
        switch (status) {
            case 0: return '#FD353C'; // Red
            case 1: return '#BB9F06'; // Yellow
            case 2: return '#74AA9C'; // Green
            default: return '#74AA9C'; // Green as default
        }
    };

    useEffect(() => {
        // Update the color based on the reliability status
        const updateColor = () => setColor(reliabilityStatus());
        updateColor(); // Initial color update

        const interval = setInterval(() => {
            updateColor(); // Update color at a regular interval
        }, 10000); // Adjust interval as needed

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = async (prompt: string) => {
        const currentTime = new Date().toISOString();
        setIsLoading(true);

        // Add the sent message
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
            // Add the received message from the API response
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
