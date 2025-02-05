import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import References from './components/References';
function App() {
    document.title = "portfolio";
    return (_jsxs("div", { className: "container", children: [_jsxs("nav", { className: "sidebar", children: [_jsx("div", { className: "sidebar-text", children: _jsx("p", { children: "PORTFOLIO" }) }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "#home", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#about", children: "About Me" }) }), _jsx("li", { children: _jsx("a", { href: "#education", children: "Education" }) }), _jsx("li", { children: _jsx("a", { href: "#projects", children: "Projects" }) }), _jsx("li", { children: _jsx("a", { href: "#references", children: "References" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", children: "Contact" }) })] })] }), _jsxs("main", { className: "content", children: [_jsx(Home, {}), _jsx(About, {}), _jsx(Education, {}), _jsx(Projects, {}), _jsx(References, {}), _jsx(Contact, {})] })] }));
}
export default App;
