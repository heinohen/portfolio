import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
const App = () => {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    return (_jsxs(Router, { basename: "/portfolio", children: [_jsxs("div", { className: "App", children: [_jsx(Navbar, {}), _jsx("div", { className: "main-content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] }) })] }), _jsx(Footer, {})] }));
};
;
export default App;
