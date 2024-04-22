// PromptInput.tsx
"use client"

import React, { useState } from 'react';
import { Textarea, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { PromptInputProps } from './types'

const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    onSubmit(prompt);
    setPrompt(''); // Reset the textarea after submit
  };

  // Handle Enter key in the textarea
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) { // Check if Enter is pressed without Shift key
      event.preventDefault(); // Prevent the default action (newline)
      onSubmit(prompt);
      setPrompt(''); // Reset the textarea after submit
    }
  };

  return (
    <FormControl 
      as="form" 
      onSubmit={handleSubmit} 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
      gap="3"
      width="full"
    >
      <FormLabel htmlFor="prompt">Enter your prompt:</FormLabel>
      <Textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type here..."
        required
        resize="none"
        size="sm"
        width="90%"
        onKeyDown={handleKeyDown} // Add keyDown event handler
      />
      <Button
        mt={2}
        colorScheme="blue"
        isLoading={isLoading}
        type="submit"
        disabled={isLoading}
        size="md"
      >
        Send
      </Button>
    </FormControl>
  );
};

export default PromptInput;