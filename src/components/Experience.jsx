import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";

const Experience = () => {
    const technologies = [
        {
            id: 1,
            name: "HTML",
            image: html,
            style: "shadow-orange-500",
        },
        {
            id: 2,
            name: "CSS",
            image: css,
            style: "shadow-blue-400",
        },
        {
            id: 3,
            name: "JavaScript",
            image: js,
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            name: "React",
            image: react,
            style: "shadow-blue-500",
        },
        {
            id: 5,
            name: "Tailwind",
            image: tailwind,
            style: "shadow-sky-400",
        },
        {
            id: 6,
            name: "GitHub",
            image: github,
            style: "shadow-gray-400",
        },
        {
            id: 7,
            name: "SQL",
            image: sql,
            style: "shadow-green-300",
        },
        {
            id: 8,
            name: "Python",
            image: python,
            style: "shadow-yellow-400",
        },
    ];

    return (
        <div className="experience h-screen w-full bg-gradient-to-b from-gray-950  to-gray-800 md:bg-gradient-to-b md:from-black md:to-gray-800">
            <div className="max-w-[90%] flex flex-col p-4 justify-center w-full h-full text-white md:ml-16">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">
                        These are the technologies I have worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {technologies.map((technology) => {
                        return (
                            <div
                                className={`items-center shadow-md py-2 hover:scale-105 duration-500 ease-in-out  rounded-lg ${technology.style}`}
                                key={technology.id}
                            >
                                <img
                                    src={technology.image}
                                    alt={technology.name}
                                    className="w-20 mx-auto"
                                />
                                <p className="text-lg font-bold py-4">
                                    {technology.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
