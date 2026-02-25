import { useInView } from "react-intersection-observer";
import './About.css';

const About = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();

    return (
        <>
            <main className="about-wrapper" id="about">
                <div className="about-title">
                    <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>A brief <span className="heading-highlight">info about</span> me.</h2>
                    <div className="underline"></div>
                </div>
                <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                    <p>Hey! I am Ezekiel Elom, a Software Developer.</p>
                    <p>I got a knack for building cool applications </p>
                    <p>I am currently exploring the web3 space </p>
                    {/* <p>Me and my team build projects revolving around SaaS, SAPs, Cross platform mobile apps, Cloud ☁️</p> */}
                    <p>I am open to remote opportunities as a React frontend developer</p>
                    <p>My hobbies include a lot of things, like , playing chess and football.</p>
                    <p>Feel free to connect with me on my socials</p>
                    <p>Let's build something cool together!</p>
                    
                </div>
            </main>
        </>
    );
}

export default About;