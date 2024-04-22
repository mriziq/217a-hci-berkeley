// types.ts

import { AvatarProps } from '@chakra-ui/react';

export interface Message {
    type: 'sent' | 'received';
    text: string;
    timestamp: string; // ISO string for timestamp
    sender: 'You' | 'ChatGPT';  //  string;  // make 'sender' optional if it's not always required
    color?: string;  // Optional color for the avatar background
  }
  
export interface WorldMetricProps {
  label: string;
  confidencePercentage: number; // Percentage of confidence
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export interface MetricProps {
  label: string;
  yesPercentage: number;  // Percentage of 'Yes'
}

export interface MessageDisplayProps {
  messages: Message[];
  chatGPTColor: string;
}

export interface ClickableAvatarProps extends AvatarProps {
  sender: 'You' | 'ChatGPT';
  avatarPath: string;
  avatarColor?: string;  // Optional color for the avatar background
  onClick?: () => void;  // Optional click handler
}
