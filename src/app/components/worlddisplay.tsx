// WorldMetricRow component inside WorldDisplay.tsx
"use client"

import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { getMetricLabel } from '../utils';
import { WorldMetricProps } from './types'

const WorldMetricRow: React.FC<WorldMetricProps> = ({ label, confidencePercentage }) => {
    return (
        <VStack spacing={2} align="left" p={4}>
            <Text fontSize="lg" fontWeight="bold">{label}</Text>
            <Box width="100%" bg="gray.800" borderRadius="md" p="2px" position="relative">
                <Box width={`${confidencePercentage}%`} bg="green.500" borderRadius="md" height="20px">
                    <Text fontSize="sm" pl={2} color="white">{`${confidencePercentage}% Confident`}</Text>
                </Box>
            </Box>
        </VStack>
    );
};

const WorldDisplay = () => {
    const labels = {
        gender: getMetricLabel('gender'),
        age: getMetricLabel('age'),
        location: getMetricLabel('location'),
        content: getMetricLabel('content')
    };

    return (
        <VStack spacing={2} border="1px" borderColor="gray.200" borderRadius="lg" align="left">
            <WorldMetricRow label={labels.gender} confidencePercentage={92} />
            <WorldMetricRow label={labels.age} confidencePercentage={85} />
            <WorldMetricRow label={labels.location} confidencePercentage={78} />
            <VStack spacing={0} align="left" p={4}>
                <Text fontSize="lg" fontWeight="bold">About You</Text>
                <VStack spacing={2}>
                    <Box w="100%" pl="5px" h="60px" bg="gray.500" borderRadius="md">Education Level
                    <Text fontWeight={"bold"}>Post-Graduate</Text></Box>
                    <Box w="100%" pl="5px" h="60px" bg="gray.500" borderRadius="md">Currently
                    <Text fontWeight={"bold"}>Writing an essay</Text>
                    </Box>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default WorldDisplay;
