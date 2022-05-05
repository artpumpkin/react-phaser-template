import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <RecoilRoot>
    <RecoilNexus />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </RecoilRoot>,
);
