import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/ui/button.js";
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";
import { useNavigate } from "react-router-dom";
import WeaveXLogo from '../pages/logo.js'; // Adjust the path to your logo
export const Navbar = () => {
    const { connected } = useConnection();
    const navigate = useNavigate();
    const handleNavigateToDashboard = () => {
        navigate("/dashboard/"); // Navigate to '/dashboard' route
    };
    return (_jsxs("header", { className: "fixed top-0 left-0 w-full flex items-center bg-black p-6 z-50 shadow-lg", children: [_jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: "flex items-center justify-center mr-8", children: [_jsx(WeaveXLogo, {}), " ", _jsxs("div", { className: "ml-2", children: [_jsx("div", { className: "text-2xl font-semibold text-white", children: "WeaveX" }), _jsx("div", { className: "text-xs font-medium text-purple-300", children: "Decentralized Solutions" })] })] }), _jsxs("nav", { className: "flex space-x-4", children: [_jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", children: "Swap" }), _jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", children: "Stake" }), _jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", children: "Bridges" })] }), _jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded ml-[915px]", children: "Community" })] }), _jsx("div", { className: 'ml-auto', children: connected ? (_jsx(Button, { className: "bg-transparent hover:bg-purple-700 text-white font-semibold py-2 px-4 border border-purple-700 hover:border-transparent rounded", onClick: handleNavigateToDashboard, children: "Dashboard" })) : (_jsx("div", { className: "gap-10 p-9 my-18 flex flex-col justify-center items-center", children: _jsx(ConnectButton, { accent: "rgb(30,129,176)" }) })) })] }));
};
export default Navbar;
