import React from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css";
import Headshot from "../../assets/MemojiHeadshot.png";
import TechStackImage from "../../assets/versespi.jpeg";

export default function AboutPage() {
    return (
        <div id="about" className="about">
            <h1>About the technology.</h1>
            
            <div className="about-container">
                {/* First Column */}
                <div className="container2-1">
                    <div className="long-box">
                        <Image
                            className="headshot"
                            src={Headshot}
                            alt="Mark Nguyen"
                        />
                    </div>
                    <div className="short-box">
                        <h4>Dive into the future of digital art with our platform, enabling seamless <span className="gradient-text">real time</span> trading of unique NFT assets.</h4>
                    </div>
                </div>

                {/* Second Column */}
                <div className="container2-2">
                    <div className="languages-box">
                        <h4 className="text-center"> <span className="gradient-text2">Secure transactions</span></h4>
                        <p>Backed with Wormhole & Escrow Contract all built on Scaffold-ETH</p>
                    </div>
                    <div className="framework-box">
                        <h4 className="text-center"> <span className="gradient-text3">Enter private trading rooms</span></h4>
                            <p>Step into exclusive private trading rooms, where you can engage in secure, discreet transactions with fellow NFT enthusiasts and collectors, ensuring personalized experiences and tailored trades in the world of digital art.</p>
                        <Image
                            src={TechStackImage}
                            alt="Tech Stack"
                            className="tech-stack-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
