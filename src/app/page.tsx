"use client"
import { Box } from "@chakra-ui/react";
import Chat from "./components/chat";


const HomePage = () => {
  return (
    <div>
      <h1>School of Information @ UC Berkeley</h1>
      <Box p={5}>
        <Chat />
      </Box>
    </div>
  );
};

export default HomePage;