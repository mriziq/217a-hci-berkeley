"use client"
import { Box, Text, HStack } from "@chakra-ui/react";
import Chat from "./components/chat";
import Link from "next/link";


const HomePage = () => {
  return (
    <>
      <HStack w="100%" justifyContent="space-between" p={5}>
        <Text textAlign={"left"}>School of Information @ UC Berkeley<br />
        </Text>
        <Link href="https://www.github.com/mriziq/217a-hci-berkeley"><span style={{
          color: "blue.800",
          fontWeight: "normal"
        }}>Github</span></Link>
      </HStack>
      <Box p={5}>
        <Chat />
      </Box>
    </>
  );
};

export default HomePage;