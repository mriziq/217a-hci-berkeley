// MessageDisplay.tsx
import React from 'react';
import { VStack, Text, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Message } from './types';  // Import your Message type definition
import ClickableAvatar from './clickableavatar';

// Define the type for the props expected by MessageDisplay
interface MessageDisplayProps {
    messages: Message[];  // Array of Message objects
    chatGPTColor: string;  // Color string for ChatGPT avatar
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages, chatGPTColor }) => (
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
                />
                <VStack align="start">
                    <Text fontSize="xs" fontWeight="bold">{message.sender}</Text>
                    <Text fontSize="sm" whiteSpace="pre-line">{message.text}</Text>
                    <Text fontSize="xs" opacity="0.6">{format(new Date(message.timestamp), 'p')}</Text>
                </VStack>
            </HStack>
        ))}
    </VStack>
);

export default MessageDisplay;
