import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <div id="navbar">
                <Navbar />
            </div>
            <div id="home">
                <Home />
            </div>
            <div id="social-links">
                <SocialLinks />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;
