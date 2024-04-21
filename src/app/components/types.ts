// types.ts
export interface Message {
    type: 'sent' | 'received';
    text: string;
    timestamp: string; // ISO string for timestamp
    sender: 'You' | 'ChatGPT';  //  string;  // make 'sender' optional if it's not always required
    color?: string;  // Optional color for the avatar background
  }
  