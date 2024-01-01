import React from "react";

const Contact = () => {
    return (
        <div className="contact h-screen w-full bg-gradient-to-b from-gray-800  to-gray-950 md:bg-gradient-to-b md:from-gray-800 md:to-black">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg h-full text-white md:ml-[10%]">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Contact
                    </p>
                    <p className="py-6">
                        Submit the form below to get in touch with me!
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/e2f42d35-5d0d-428f-8b48-4bf020dd68d3"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 border-white text-white focus:outline-none rounded-md my-2"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 border-white text-white focus:outline-none rounded-md my-2"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 border-white text-white focus:outline-none rounded-md my-2"
                        />
                        <button
                            type="submit"
                            className="text-white flex items-center py-3 px-6 my-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer hover:scale-105 duration-500 ease-in-out mx-auto"
                        >
                            {" "}
                            Send Message{" "}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
