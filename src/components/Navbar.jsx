import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const links = [
        {
            id: 1,
            name: "Home",
            link: "home",
        },
        {
            id: 2,
            name: "About",
            link: "about",
        },
        {
            id: 3,
            name: "Experience",
            link: "experience",
        },
        {
            id: 4,
            name: "Contact",
            link: "contact",
        },
    ];
    return (
        <div>
            <div className="navbar flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
                <div className="navbar__title  text-5xl font-signature ">
                    <h1>Pradesh GV</h1>
                </div>
                <div className="navbar__links hidden md:flex space-x-4 px-4 text-lg text-gray-500 ">
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                to={link.link}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div
                    onClick={() => {
                        setNavbarOpen(!navbarOpen);
                    }}
                    className="navbar__links text-gray-500 md:hidden"
                >
                    {navbarOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            <div className="navbar__links md:hidden">
                {navbarOpen && (
                    <div className="fixed w-full mt-20 flex flex-col items-center space-y-4 text-lg text-gray-500 bg-gradient-to-b from-black to-gray-950 pb-4">
                        {links.map((link) => {
                            return (
                                <Link
                                    key={link.id}
                                    to={link.link}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="cursor-pointer hover:scale-105 duration-500 ease-in-out"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
