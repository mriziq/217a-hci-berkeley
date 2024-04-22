// ReliabilityStatusIndicator.tsx
"use client"

import React from 'react';
import { HStack, Text, Avatar, Box } from '@chakra-ui/react';
import { useReliabilityStatus } from '../context/ReliabilityStatusContext'; // Ensure this path is correct

const ReliabilityStatusIndicator = () => {
    const { color } = useReliabilityStatus();  // Access the reliability color from context

    return (
        <HStack width="100%" justifyContent="space-between" alignItems="center" p={4}>
            <Box>
                <Avatar
                    name="ChatGPT"
                    src="/path-to-chatgpt-avatar.jpg" // Adjust the path as necessary
                    size="md"
                    style={{
                        boxShadow: `0 0 10px 3px ${color}`, // Apply dynamic glowing effect based on color
                    }}
                />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
                Reliability Status
            </Text>
        </HStack>
    );
};

export default ReliabilityStatusIndicator;
