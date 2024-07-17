import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Center } from '../comp/Center.js';
import { Navbar } from '../comp/Navbar.js';
const LandingPage = () => {
    return (_jsxs("div", { className: 'bg-gray-900 min-h-screen text-white', children: [_jsx("div", { className: "fixed top-0 left-0 w-full", children: _jsx(Navbar, {}) }), _jsx("div", { className: "flex justify-center items-center h-full", children: _jsx(Center, {}) })] }));
};
export default LandingPage;
