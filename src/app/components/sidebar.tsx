"use client"

import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      right={isOpen ? '0' : '-25%'}  // Slides in and out
      top="0"
      h="100%"
      w="25%"
      bg="blue.500"
      p={4}
      color="white"
      transition="right 0.5s"
      zIndex="overlay"
    >
      <p>I am your sidebar content!</p>
      <Button onClick={onClose}>Close</Button>
    </Box>
  );
};

export default Sidebar;
