import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from 'react-router-dom';
import { StateContextProvider } from './context';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains"
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "etherscan-sepolia";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThirdwebProvider
				activeChain={Sepolia}
				clientId="733d7e18e83e26b437f15f0e6bef6ded">
				<StateContextProvider>
					<App />
				</StateContextProvider>
			</ThirdwebProvider>
		</BrowserRouter>
	</React.StrictMode>
);
