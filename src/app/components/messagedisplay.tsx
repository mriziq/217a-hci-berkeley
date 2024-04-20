// MessageDisplay.tsx
"use client"

import React, { useEffect, useRef } from 'react';
import { VStack, Text, Box, Avatar, HStack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Message } from './types';  // Adjust the path as necessary

interface MessageDisplayProps {
  messages: Message[];
}

const parseISODate = (dateString: string): Date => {
  const timestamp = Date.parse(dateString);
  if (!isNaN(timestamp)) {
    return new Date(timestamp);
  }
  return new Date(); // Return current date as fallback
};

const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <VStack
      p="4"
      bg="gray.50"
      borderRadius="md"
      height="calc(100vh - 150px)"
      overflowY="auto"
      width="100%"
      spacing="4"
      align="flex-start"
    >
      {messages.map((message, index) => (
        <HStack key={index} align="start" width="100%">
          <Avatar
            name={message.type === 'sent' ? 'You' : 'ChatGPT'}
            size="sm"
            src={message.type === 'sent' ? '/path-to-your-avatar.jpg' : '/path-to-chatgpt-avatar.jpg'}
          />
          <VStack align="start">
            <Text fontSize="xs" fontWeight="bold" opacity="0.9">
              {message.type === 'sent' ? 'You' : 'ChatGPT'}
            </Text>
            <Text fontSize="sm" whiteSpace="pre-line">
              {message.text}
            </Text>
            <Text fontSize="xs" opacity="0.6">
            {format(parseISODate(message.timestamp), 'p')}
            </Text>
          </VStack>
        </HStack>
      ))}
      <div ref={endOfMessagesRef} />
    </VStack>
  );
};

export default MessageDisplay;
