import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import landingImage from "../../images/tewo11.png";
import SocialIcons from "../../components/SocialIcons";
import Typewriter from "typewriter-effect"

const Landing = ({ name, tagline }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      // mixBlendMode: "lighten",
      height: "85%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "tomato",
      // textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "tan",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
      
    },
    
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.span
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          
        >
          {/* {tagline} */}
    
         <Typewriter onInit={(typewriter)=>{typewriter.typeString("I'm a Web Developer").pauseFor(1500).deleteAll().typeString("I'm an Architect").pauseFor(1500).deleteAll().typeString("I'm a Designer").pauseFor(1500).deleteAll().typeString("I'm a freelancer").pauseFor(1500).deleteAll().typeString("I'm a Web Developer").start();

          }}/>
        </motion.span>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 0.5 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt=""
        />
      </div>

      <SocialIcons />
    </section>
  );
};

export default Landing;
