// ClickableAvatar.tsx
"use client"

import React from 'react';
import { Avatar, AvatarProps } from '@chakra-ui/react';

interface ClickableAvatarProps extends AvatarProps {
  sender: 'You' | 'ChatGPT';
  avatarPath: string;
  avatarColor?: string; // Optional color for the avatar background
  onClick?: () => void; // Optional click handler
}

const ClickableAvatar: React.FC<ClickableAvatarProps> = ({ sender, avatarPath, avatarColor, onClick, ...props }) => {
  const isClickable = sender === 'ChatGPT'; // Only ChatGPT avatar is clickable

  return (
    <Avatar
      name={sender}
      src={avatarPath}
      size="sm"
      {...props}
      onClick={isClickable ? onClick : undefined} // Use onClick prop if provided and clickable
      cursor={isClickable ? 'pointer' : 'default'}
      style={{
        backgroundColor: avatarColor,
        borderColor: avatarColor // If border color needs to match background
      }}
    />
  );
};

export default ClickableAvatar;
