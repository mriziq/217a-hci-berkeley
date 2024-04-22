// ClickableAvatar.tsx
"use client"

import React from 'react';
import { Avatar, AvatarProps } from '@chakra-ui/react';

interface ClickableAvatarProps extends AvatarProps {
  sender: 'You' | 'ChatGPT';
  avatarPath: string;
  avatarColor?: string;  // Optional color for the avatar background
  onClick?: () => void;  // Optional click handler
}

const ClickableAvatar: React.FC<ClickableAvatarProps> = ({ sender, avatarPath, avatarColor, onClick, ...props }) => {
  const isClickable = sender === 'ChatGPT'; // Only ChatGPT avatar is clickable

  // Define a glowing effect for the ChatGPT avatar
  const glowStyle = isClickable ? {
    boxShadow: `0 0 8px 2px ${avatarColor}`,  // Glow effect
    borderColor: avatarColor
  } : {};

  return (
    <Avatar
      name={sender}
      src={avatarPath}
      size="sm"
      {...props}
      onClick={isClickable ? onClick : undefined}
      cursor={isClickable ? 'pointer' : 'default'}
      style={{
        backgroundColor: avatarColor,
        ...glowStyle  // Apply the glowing effect conditionally
      }}
    />
  );
};

export default ClickableAvatar;
