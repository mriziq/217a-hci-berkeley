// Sidebar.tsx
"use client"

import React from 'react';
import { Box, Button, VStack, Heading, Divider, Text, useColorModeValue } from '@chakra-ui/react';
import MetricsDisplay from './metricdisplay';
import WorldDisplay from './worlddisplay';
import { SidebarProps } from './types'
import ReliabilityStatusIndicator from './ReliabilityStatusIndicator';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Optional: Use color mode value for better theme adaptability
  // const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Box
      position="fixed"
      right={isOpen ? '0' : '-30%'}  // Slides in and out
      top="0"
      h="100%"
      w="30%"
      bg={"gray.700"}
      p={4}
      color={"white"}
      transition="right 0.5s"
      zIndex="overlay"
      overflowY="auto"  // Make sidebar scrollable
    >
      <VStack align="stretch" spacing={4}>
      <Button bg="white" variant="solid"  onClick={onClose}>Close</Button>
      <ReliabilityStatusIndicator />
        <Heading size="lg">Assumptions</Heading>
        
        <Divider />

        <Text fontSize="sm">These assumptions change real-time and are based on the latest response.</Text>
        <WorldDisplay />

        {/* <Divider my={4} /> */}

        {/* <Heading size="lg">Status</Heading>
        <MetricsDisplay/> */}
      
      </VStack>
    </Box>
  );
};

export default Sidebar;
