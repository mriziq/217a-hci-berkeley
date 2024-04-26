"use client"

import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import worldMetricsConfig from '../config/wizOfOz.json'; 

const WorldMetricRow: React.FC<{ label: string, confidencePercentage: number }> = ({ label, confidencePercentage }) => {
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
    return (
        <VStack spacing={2} border="1px" borderColor="gray.200" borderRadius="lg" align="left">
            {worldMetricsConfig.metrics.map(metric => (
                <WorldMetricRow key={metric.key} label={metric.label} confidencePercentage={metric.confidencePercentage} />
            ))}
            <VStack spacing={3} align="left" p={4}>
                <Text fontSize="lg" fontWeight="bold">About You</Text>
                {worldMetricsConfig.aboutYou.map(item => (
                    <Box key={item.description} w="100%" pl="5px" h="60px" bg="gray.500" borderRadius="md">
                        {item.description}
                        <Text fontWeight={"bold"}>{item.detail}</Text>
                    </Box>
                ))}
            </VStack>
        </VStack>
    );
};

export default WorldDisplay;
