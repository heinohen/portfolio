import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
// Create the different page components
const Services = () => _jsxs("div", { children: [_jsx("h2", { children: "Services Page" }), _jsx("p", { children: "Discover our services." })] });
const Contact = () => _jsxs("div", { children: [_jsx("h2", { children: "Contact Page" }), _jsx("p", { children: "Get in touch with us." })] });
const App = () => {
    return (_jsxs(Router, { children: [_jsxs("div", { className: "App", children: [_jsx(Navbar, {}), _jsx("div", { className: "main-content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }) })] }), _jsx(Footer, {})] }));
};
;
export default App;
