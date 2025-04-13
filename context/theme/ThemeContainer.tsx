// src/components/ui/ThemeContainer.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import system from '../../styles/theme'; // adjust if your theme lives elsewhere
import { ColorModeProvider } from "../../src/components/ui/color-mode";


interface ThemeContainerProps {
  children: React.ReactNode;
}

const ThemeContainer: React.FC<ThemeContainerProps> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      {/* Inject the initial color mode script */}
      <ColorModeProvider />
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
