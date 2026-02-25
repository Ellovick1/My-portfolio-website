import React from "react";
import './Services.css'
import { illusFrontend, illusPerformance, illusBackend,illusMobile } from "../../assets";
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const {ref: myTitleRef, inView: titleVisible} = useInView();
    const {ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2 ref={myTitleRef} className={ titleVisible ? "component-headings show" : "component-headings"}><span className="heading-highlight">Services</span> I <span className="heading-highlight">provide</span>.</h2>
            <div className="underline" ></div>
            </header>
            <div ref={myCardRef} className="cards-container" >

                <div className={cardVisible ? "Card one show" : "Card one"} >
                <div className="Card-inner">
                    <div className="skills-images"> 
                         <img src={illusFrontend} alt="palette"/>
                    </div>
                    <h3>Web Development</h3>
                    <p>Product landing pages, Single Page Apps, Responsive Design, Business & Customized websites</p>
                </div>
                </div>

                <div className={cardVisible ? "Card one show" : "Card one"} >
                <div className="Card-inner">
                    <div className="skills-images"> 
                         <img src={illusFrontend} alt="palette"/>
                         {/* <img src={illusPerformance} alt="palette"/> */}
                    </div>
                    <h3>Website Performance Optimization</h3>
                    <p>Improving site loading speeds and ensuring smooth interactions.</p>
                </div>
                </div>

                {/* <div className={cardVisible ? "Card two show" : "Card two"}>
                <div className="Card-inner" >
                    <div className="skills-images">
                        <img src={illusBackend} alt="frontend" />
                    </div>
                    <h3>Backend</h3>
                    <p>Business Logic, Databases, APIs</p>
                </div>
                </div> */}

                {/* <div className={cardVisible ? "Card three show" : "Card three"}>
                <div className="Card-inner" >
                    <div className="skills-images">
                        <img src={illusMobile} alt="database" />
                    </div>
                    <h3>Mobile</h3>
                    <p>Mobile UI, APIs, BaaS</p>
                </div>
                </div> */}
                
            </div>
        </div>

    )
}

export default Skills;