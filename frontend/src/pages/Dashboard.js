import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from "../components/ui/button.js";
import { ConnectButton } from "@arweave-wallet-kit/react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../components/ui/dropdown-menu.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import WeaveXLogo from './logo.js'; // Import the logo
const Dashboard = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [selectedToken, setSelectedToken] = useState(""); // Update the initial state of output to an empty string
    const navigate = useNavigate();
    const swap = (e) => {
        e.preventDefault();
        let conversionRate = 0;
        if (selectedToken === "ETH") {
            conversionRate = 0.007249;
        }
        else if (selectedToken === "BTC") {
            conversionRate = 0.0003854;
        }
        else if (selectedToken === "USD") {
            conversionRate = 22.30;
        }
        const inputValue = parseFloat(input); // Convert input value to a number
        setOutput((conversionRate * inputValue).toString()); // Update setOutput to accept a string value
    };
    return (_jsxs("div", { className: "bg-gray-900 min-h-screen text-white", children: [_jsxs("header", { className: "fixed top-0 left-0 w-full flex items-center bg-black p-6 z-50 shadow-lg", children: [_jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: "flex items-center justify-center mr-8", children: [_jsx(WeaveXLogo, {}), " ", _jsxs("div", { className: "ml-2", children: [_jsx("div", { className: "text-2xl font-semibold text-white", children: "WeaveX" }), _jsx("div", { className: "text-xs font-medium text-purple-300", children: "Decentralized Solutions" })] })] }), _jsxs("nav", { className: "flex space-x-4", children: [_jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", children: "Swap" }), _jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", children: "Stake" }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-1 px-3 border border-purple-700 hover:border-transparent rounded", children: "Bridges" }), _jsxs(DropdownMenuContent, { className: "bg-gray-800 text-gray-100 rounded-lg border border-gray-500 mt-2", children: [_jsx(DropdownMenuItem, { className: "px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600", children: _jsx(Link, { to: "https://cbridge.celer.network/1/56/USDC", children: "BNB Chain Bridge" }) }), _jsx(DropdownMenuItem, { className: "px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600", children: _jsx(Link, { to: "https://portal.polygon.technology", children: "Polygon Bridge" }) }), _jsx(DropdownMenuItem, { className: "px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600", children: _jsx(Link, { to: "https://app.optimism.io/bridge", children: "Optimism Bridge" }) }), _jsx(DropdownMenuItem, { className: "px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-600", children: _jsx(Link, { to: "https://bridge.arbitrum.io/?destinationChain=arbitrum-one&sourceChain=ethereum", children: "Arbitrium Bridge" }) }), _jsx(DropdownMenuSeparator, {})] })] })] })] }), _jsx("div", { className: 'ml-auto', children: _jsx(ConnectButton, { accent: "rgb(30,129,176)" }) })] }), _jsx("main", { className: "flex justify-center items-center pt-40", children: _jsxs("div", { className: "bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full", children: [_jsx("h1", { className: "text-2xl font-bold mb-6 text-center", children: "Swap" }), _jsxs("div", { className: 'bg-gray-700 p-6 rounded-xl mb-4', children: [_jsxs("div", { className: 'flex justify-between items-center mb-4', children: [_jsx("h4", { className: 'text-purple-400', children: "You send" }), _jsx("h4", { className: 'text-xl text-blue-400', children: "in AR" })] }), _jsx("input", { type: "text", className: "w-full h-12 bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600", placeholder: "0", onChange: (e) => setInput(e.target.value) })] }), _jsxs("div", { className: 'bg-gray-700 p-6 rounded-xl mb-4', children: [_jsxs("div", { className: 'flex justify-between items-center mb-4', children: [_jsx("h4", { className: 'text-purple-400', children: "You receive" }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "inline-block px-4 py-2 border-2 border-gray-500 rounded-lg bg-gray-800 text-gray-100 cursor-pointer transition-colors duration-300 hover:border-purple-700 hover:text-white hover:bg-gray-600", children: selectedToken || "Select" }), _jsxs(DropdownMenuContent, { className: "bg-gray-800 text-gray-100 rounded-lg border border-gray-500 mt-2", children: [_jsxs(DropdownMenuItem, { className: "px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600", onSelect: () => setSelectedToken("ETH"), children: [_jsx(FontAwesomeIcon, { icon: faEthereum, className: "mr-2" }), " ETH"] }), _jsxs(DropdownMenuItem, { className: "px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600", onSelect: () => setSelectedToken("BTC"), children: [_jsx(FontAwesomeIcon, { icon: faBitcoin, className: "mr-2" }), " BTC"] }), _jsxs(DropdownMenuItem, { className: "px-4 py-2 flex items-center cursor-pointer transition-colors duration-300 hover:bg-gray-600", onSelect: () => setSelectedToken("USD"), children: [_jsx(FontAwesomeIcon, { icon: faDollarSign, className: "mr-2" }), " USD"] }), _jsx(DropdownMenuSeparator, {})] })] })] }), _jsx("input", { type: "text", className: "w-full h-12 bg-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600", placeholder: "0", value: output, readOnly: true })] }), _jsx("div", { className: "flex justify-center", children: _jsx(Button, { className: "bg-purple-700 text-white hover:bg-purple-600 cursor-pointer text-xl font-mono w-[80%] mt-6 py-6 rounded-full", onClick: swap, children: "Swap" }) })] }) })] }));
};
export default Dashboard;
