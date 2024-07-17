import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ArweaveWalletKit
        config={{
          permissions: [
            "ACCESS_ADDRESS",
            "ACCESS_PUBLIC_KEY",
            "SIGN_TRANSACTION",
            "DISPATCH",
          ],
          ensurePermissions: true,
          strategies: [new ArConnectStrategy()],
        }}
      >
        <App />
      </ArweaveWalletKit>
    </React.StrictMode>
  );
} else {
  console.error("Root element 'root' not found in the document.");
}
