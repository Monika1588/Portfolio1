import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {

                setShowNavbar(false);
            } else {

                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    return (
        <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
            <div className="navbar-left">
                <span className="navbar-logo">Monika Verma</span>
            </div>

 
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`navbar-right ${menuOpen ? "active" : ""}`}>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><a href="#feedback" onClick={() => setMenuOpen(false)}>Share Feedback</a></li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        <button className="connect-btn">Connect</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
