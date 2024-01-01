import React from "react";
import HeroImage from "../assets/Pradesh latest Photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div
            className="h-screen w-full bg-gradient-to-b from-gray-950  to-gray-800 md:bg-gradient-to-b md:from-black md:to-gray-800"
            id="home"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row  text-white ">
                <div>
                    <div className="home__title text-5xl md:text-7xl font-bold py-6 mt-20 md:mt-0">
                        <h1> I'm Pradesh</h1>
                    </div>
                    <div className="home_briefing text-lg sm:text-2xl text-gray-500 py-4 max-w-2xl ">
                        <p>
                            A budding Full Stack Developer and Analyst with the
                            expertise to seamlessly integrate web development
                            and data analysis for comprehensive technical
                            solutions.
                        </p>
                        <div className="portfolio-button flex items-center justify-center md:flex md:items-start md:justify-start">
                            <Link to="experience" smooth={true} duration={500}>
                                <button className=" group text-white w-fit flex items-center py-3 px-6 my-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">
                                    Portfolio
                                    <span className="group-hover:rotate-90 duration-300">
                                        <MdOutlineKeyboardArrowRight />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hero_image py-4 md:py-0">
                    <img
                        src={HeroImage}
                        alt="Profile Image"
                        className="rounded-2xl mx-auto w-2/3  md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
