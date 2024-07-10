import React, { useState } from 'react';
import { Button } from "../components/ui/button.js";
import { ConnectButton } from "@arweave-wallet-kit/react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import WeaveXLogo from './logo.js'; // Import the logo

const Dashboard = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState<string>(""); // Update the initial state of output to an empty string
  const navigate = useNavigate();

  const swap = (e) => {
    e.preventDefault();
    let conversionRate = 0;
    if (selectedToken === "ETH") {
      conversionRate = 0.007249;
    } else if (selectedToken === "BTC") {
      conversionRate = 0.0003854;
    } else if (selectedToken === "USD") {
      conversionRate = 22.30;
    }
    const inputValue = parseFloat(input); // Convert input value to a number
    setOutput((conversionRate * inputValue).toString()); // Update setOutput to accept a string value
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="fixed top-0 left-0 w-full flex items-center bg-black p-6 z-50 shadow-lg">
        <div className="flex items-center">
          <div className="flex items-center justify-center mr-8">
            <WeaveXLogo /> {/* Include the new logo */}
            <div className="ml-2">
              <div className="text-2xl font-semibold text-white">WeaveX</div>
              <div className="text-xs font-medium text-purple-300">Decentralized Solutions</div>
            </div>
          </div>
          <nav className="flex space-x-4">
            <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded">Swap</Button>
            <Button className="bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded">Stake</Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-transparent hover:bg-purple-700 text-white font-semibold py-1 px-3 border border-purple-700 hover:border-transparent rounded">Bridges</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-gray-100 rounded-lg border border-gray-500 mt-2">
                <DropdownMenuItem className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600">
                  <Link to={"https://cbridge.celer.network/1/56/USDC"}>
                  BNB Chain Bridge
                  </Link>
                  
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600">
                  <Link to={"https://portal.polygon.technology"}>
                    Polygon Bridge
                  </Link>
                  
                </DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600">
                  <Link to={"https://app.optimism.io/bridge"}>
                    Optimism Bridge
                    </Link>
                </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600">
                  <Link to={"https://bridge.arbitrum.io/?destinationChain=arbitrum-one&sourceChain=ethereum"}>
                    Arbitrium Bridge
                    </Link>
                </DropdownMenuItem>

                
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className='ml-auto'>
          <ConnectButton accent="rgb(30,129,176)" />
        </div>
      </header>

      <main className="flex justify-center items-center pt-40">
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Swap</h1>
          <div className='bg-gray-700 p-6 rounded-xl mb-4'>
            <div className='flex justify-between items-center mb-4'>
              <h4 className='text-purple-400'>You send</h4>
              <h4 className='text-xl text-blue-400'>in AR</h4>
            </div>
            <input type="text" className="w-full h-12 bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="0" onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className='bg-gray-700 p-6 rounded-xl mb-4'>
            <div className='flex justify-between items-center mb-4'>
              <h4 className='text-purple-400'>You receive</h4>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-block px-4 py-2 border-2 border-gray-500 rounded-lg bg-gray-800 text-gray-100 cursor-pointer transition-colors duration-300 hover:border-purple-700 hover:text-white hover:bg-gray-600">
                  {selectedToken || "Select"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 text-gray-100 rounded-lg border border-gray-500 mt-2">
                  <DropdownMenuItem className="px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600" onSelect={() => setSelectedToken("ETH")}>
                    <FontAwesomeIcon icon={faEthereum} className="mr-2" /> ETH
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600" onSelect={() => setSelectedToken("BTC")}>
                    <FontAwesomeIcon icon={faBitcoin} className="mr-2" /> BTC
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600" onSelect={() => setSelectedToken("USD")}>
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" /> USD
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <input type="text" className="w-full h-12 bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="0" value={output} readOnly />
          </div>
          <div className="flex justify-center">
            <Button className="bg-purple-700 text-white hover:bg-purple-600 cursor-pointer text-xl font-mono w-[80%] mt-6 py-6 rounded-full" onClick={swap}>Swap</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard;
