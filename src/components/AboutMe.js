import aboutMeImg from "../images/tee.JPG";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Tewogbade-Fatai-Resume.pdf";
import {
  FaBootstrap,
  FaHtml5,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { DiCss3} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";


const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Tewogbade-Fatai-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>Full-stack Web Developer who creates exceptional digital experiences!</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>



            <div className="infoContainer ">
            
              
            <h4>Tech Stack</h4>
                <div className="skills">
                  <div className="skillpair">
                    <span>HTML</span>
                    <FaHtml5
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>CSS</span>
                    <DiCss3
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>Boostrap </span>
                    <FaBootstrap
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>JavaScript </span>
                    <IoLogoJavascript
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>

                  <div className="skillpair">
                    <span>Git </span>
                    <FaGitAlt
                     style={{
                      width: "60px",
                      fontSize: "4rem",
                      color:"tan"
                    }}
                    />
                  </div>

                  
                  <div className="skillpair">
                    <span>GitHub</span>
                    <FaGithub
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  
                  <div className="skillpair">
                    <span>React </span>
                    <FaReact
                     style={{
                      width: "60px",
                      fontSize: "4rem",
                      color:"tan"
                    }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>Redux</span>
                    <SiRedux
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>Typescript</span>
                    <TbBrandTypescript
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }} 
                    />
                  </div>
                  <div className="skillpair">
                    <span>Express JS</span>
                    <SiExpress
                     style={{
                      width: "60px",
                      fontSize: "4rem",
                      color:"tan"
                    }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>Node JS</span>
                    <FaNodeJs
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                  <div className="skillpair">
                    <span>MongoDB</span>
                    <SiMongodb
                      style={{
                        width: "60px",
                        fontSize: "4rem",
                        color:"tan"
                      }}
                    />
                  </div>
                </div>
          </div>









            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Tewogbade Fatai</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
