import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Section = ({ title, children }) => {
    return (_jsxs("section", { children: [_jsx("h2", { children: title }), children] }));
};
export default Section;
