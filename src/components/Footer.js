import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../Footer.css'; // Import Footer styles
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsxs("div", { className: "footer-content", children: [_jsx("p", { children: "\u00A9 2025 My App. All Rights Reserved." }), _jsxs("div", { className: "social-links", children: [_jsx("a", { href: "https://github.com/heinohen", target: "_blank", rel: "noopener noreferrer", children: "GitHub" }), " "] }), "Photo by ", _jsx("a", { href: "https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", children: "Kenrick Mills" }), " on ", _jsx("a", { href: "https://unsplash.com/photos/birds-flying-near-clouds-MF9Wy1NA55I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", children: "Unsplash" })] }) }));
};
export default Footer;
