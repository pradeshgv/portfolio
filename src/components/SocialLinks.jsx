import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BsPersonRolodex } from "react-icons/bs";
import React from "react";
const SocialLinks = () => {
    const allLinks = [
        {
            id: 1,
            name: "Github",
            icon: <FaGithub size={30} />,
            link: "https://github.com/pradeshgv",
        },
        {
            id: 2,
            name: "Linkedin",
            icon: <FaLinkedin size={30} />,
            link: "https://www.linkedin.com/in/pradesh-gv/",
        },
        {
            id: 3,
            name: "Email",
            icon: <FaMailBulk size={30} />,
            link: "mailto:pradeshgv@gmail.com",
        },
        {
            id: 4,
            name: "Resume",
            icon: <BsPersonRolodex size={30} />,
            link: "/Pradesh_Resume.pdf",
            download: true,
        },
    ];

    return (
        <div className="hidden lg:block">
            <div className="social-links flex-col top-[35%] fixed left-0">
                <ul>
                    {allLinks.map((link) => {
                        return (
                            <li
                                key={link.id}
                                className="links flex justify-between items-center w-40 h-1/4 px-4 py-2 bg-gray-500 text-white 
                        ml-[-100px] hover:rounded-md hover:ml-[-10px] transition-all duration-500 ease-in-out"
                            >
                                <a
                                    href={link.link}
                                    className="flex justify-between items-center w-full "
                                    download={link.download}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {link.name} {link.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SocialLinks;
