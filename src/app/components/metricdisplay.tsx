// MetricsDisplay.tsx
"use client"

import React from 'react';
import { Box, Text, VStack, HStack, Tooltip, Icon } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { MetricProps } from './types'

const MetricRow: React.FC<MetricProps> = ({ label, yesPercentage }) => {
    const noPercentage = 100 - yesPercentage;  // Calculate 'No' percentage

    return (
        <VStack spacing={2} align="left" p={4}>
            <HStack spacing={2}>
                <Text fontSize="lg" fontWeight="bold">{label}</Text>
                <Tooltip label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." hasArrow>
                    <Icon as={InfoIcon} w={5} h={5} color="white.800" />
                </Tooltip>
            </HStack>
            <HStack spacing={2} width="100%">
                <Box width={`${yesPercentage * 0.8}%`} bg="green.300" borderRadius="md">
                    <Text fontSize="md" pl={2}>{`${yesPercentage}% Yes`}</Text>
                </Box>
                <Box width={`${noPercentage * 0.8}%`} bg="red.300" borderRadius="md">
                    <Text fontSize="md" pl={2}>{`${noPercentage}% No`}</Text>
                </Box>
            </HStack>
        </VStack>
    );
};

const MetricsDisplay = () => {
    return (
        <VStack spacing={2} border="1px" borderColor="gray.200" borderRadius="lg" align="left">
            <MetricRow label="Rule-Following" yesPercentage={70} />
            <MetricRow label="Confidence" yesPercentage={55} />
            <MetricRow label="Sycophancy" yesPercentage={30} />
        </VStack>
    );
};

export default MetricsDisplay;
