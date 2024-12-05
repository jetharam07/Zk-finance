// import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/Pages/Dashboard"


// rainbo******************
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();



// rainbo******************


const  App = ()=> {
  return (
    <>
    <div className="App">

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Dashboard/>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
      
    </div>
    </>
  );
}

export default App;
