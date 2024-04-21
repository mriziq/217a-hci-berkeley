// ClickableAvatar.tsx
"use client"

import React from 'react';
import { Avatar, AvatarProps } from '@chakra-ui/react';

interface ClickableAvatarProps extends AvatarProps {
  sender: 'You' | 'ChatGPT';
  avatarPath: string;
  avatarColor?: string; // Color for the avatar background
}

const ClickableAvatar: React.FC<ClickableAvatarProps> = ({ sender, avatarPath, avatarColor, ...props }) => {
  const isClickable = sender === 'ChatGPT';

  const handleClick = () => {
    if (isClickable) {
      console.log('Avatar clicked!');
    }
  };

  return (
    <Avatar
      name={sender}
      src={avatarPath}
      size="sm"
      {...props}
      onClick={isClickable ? handleClick : undefined}
      cursor={isClickable ? 'pointer' : 'default'}
      style={{
        backgroundColor: avatarColor,
        borderColor: avatarColor  // Ensure this if border is needed
      }}
    />
  );
};

export default ClickableAvatar;
