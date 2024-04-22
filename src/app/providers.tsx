// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ReliabilityStatusProvider } from './context/ReliabilityStatusContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReliabilityStatusProvider><ChakraProvider>{children}</ChakraProvider></ReliabilityStatusProvider>
}