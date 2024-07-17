import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LandingPage from './pages/LandingPage.js';
import Dashboard from './pages/Dashboard.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (_jsx("div", { className: 'p-4', children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(LandingPage, {}) }), _jsx(Route, { path: '/dashboard', element: _jsx(Dashboard, {}) })] }) }) }));
}
export default App;
