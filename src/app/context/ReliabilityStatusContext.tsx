"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define the context shape
interface ReliabilityContextType {
    color: string;
    updateColor: () => void;
}

// Create the context with a default value
const ReliabilityStatusContext = createContext<ReliabilityContextType | undefined>(undefined);

// Component to provide the context values
export const ReliabilityStatusProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [color, setColor] = useState('#74AA9C'); // Default color green

    const updateColor = () => {
        // Logic to determine the color
        const status = Math.floor(Math.random() * 3);  // This mimics the reliabilityStatus function
        switch (status) {
            case 0: 
                setColor('#FD353C'); // Red
                break;
            case 1: 
                setColor('#BB9F06'); // Yellow
                break;
            case 2: 
                setColor('#74AA9C'); // Green
                break;
            default: 
                setColor('#74AA9C'); // Default green
        }
    };

    // Update the color every 10 seconds
    useEffect(() => {
        const interval = setInterval(updateColor, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ReliabilityStatusContext.Provider value={{ color, updateColor }}>
            {children}
        </ReliabilityStatusContext.Provider>
    );
};

// Custom hook for accessing the context
export const useReliabilityStatus = () => {
    const context = useContext(ReliabilityStatusContext);
    if (context === undefined) {
        throw new Error('useReliabilityStatus must be used within a ReliabilityStatusProvider');
    }
    return context;
};
