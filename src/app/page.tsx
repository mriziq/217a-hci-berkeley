// HomePage.tsx
"use client"

import { Box, Text, HStack } from "@chakra-ui/react";
import Chat from "./components/chat";
import Link from "next/link";
import { useEffect } from "react";
import Shepherd from "shepherd.js";

const HomePage = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'shadow-md custom-shepherd',
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });

    // Step 1: Welcome
    tour.addStep({
      text: 'Welcome to our experimental ChatGPT interface!',
      buttons: [
        {
          action: tour.next,
          text: 'Next'
        }
      ]
    });
    
    tour.addStep({
      text: `<div style="text-align: center;"><img src="/tour-img.png" alt="ChatGPT Icon Reliability" style="width:50%; max-width:125px;"><br><p>You can see how reliable ChatGPT is by the color of the icon.<br>Click the ChatGPT icon to see what's going on.</p></div>`,
      buttons: [
        {
          action: tour.hide,
          text: 'Finish'
        }
      ]
    });

    // Start the tour automatically
    tour.start();
  }, []);

  return (
    <>
      <HStack w="100%" justifyContent="space-between" p={5}>
        <Text textAlign={"left"}>School of Information @ UC Berkeley</Text>
        <Link href="https://www.github.com/mriziq/217a-hci-berkeley">
          <span style={{ color: "blue", fontWeight: "normal" }}>M.I.R.R.O.R&apos;s Github</span>
        </Link>
      </HStack>
      <Box p={5} className="chat">
        <Chat />
      </Box>
    </>
  );
};

export default HomePage;
