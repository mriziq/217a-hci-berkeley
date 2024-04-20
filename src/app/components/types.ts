// types.ts
export interface Message {
    type: 'sent' | 'received';
    text: string;
    timestamp: string; // ISO string for timestamp
  }
  