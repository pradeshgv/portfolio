const About = () => {
    return (
        <div className="contact h-screen w-full bg-gradient-to-b from-gray-800  to-gray-950 md:bg-gradient-to-b md:from-gray-800 md:to-black">
            <div className="flex flex-col p-4 justify-center max-w-screen-full h-full text-white md:p-[10%]">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        About
                    </p>
                    <p className="py-12">
                        I completed my schooling at Indu International School in
                        Erode until 2020 and pursued my college education at
                        Anna University MIT Campus until June 2024. Currently
                        residing in Chennai, I have actively engaged in project
                        services, specializing in full-stack development and
                        data analysis. My academic journey has equipped me with
                        a strong foundation in both theoretical knowledge and
                        practical skills, particularly in the fields of computer
                        science and technology. During my time at Anna
                        University, I focused on honing my expertise in
                        full-stack development, allowing me to proficiently
                        handle various aspects of software development, from
                        frontend design to backend functionality. Additionally,
                        I have gained valuable experience in data analysis,
                        contributing to a well-rounded skill set that aligns
                        with the dynamic demands of the technology industry.
                    </p>
                </div>
                <div className="flex flex-col py-4 justify-center items-center border-2 border-white mx-auto px-4  my-3 rounded-md shadow-md shadow-gray-200 hover:scale-105 duration-500 ease-out">
                    <div className="font-bold text-3xl pb-3">
                        <p>Web - Development Services Provided</p>
                    </div>
                    <div className="pt-3">
                        <ul>
                            <li className="pb-2">
                                <p>E-Commerce Platform</p>
                            </li>
                            <li className="pb-2">
                                <p>Real-Time Chat Application</p>
                            </li>
                            <li className="pb-2">
                                <p>Project Management System</p>
                            </li>
                            <li className="pb-2">
                                <p>Blog/Content Management System</p>
                            </li>
                            <li className="pb-2">
                                <p>Other Websites</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
