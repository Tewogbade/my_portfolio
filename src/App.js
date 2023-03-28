import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Tewogbade Fatai",
    location: "Lagos, Nigeria",
    tagline: "",
    email: "tewogbade3008@gmail.com",
    availability: "Open for work",
    brand:
      "As a frontend web developer with a background in architecture, I possess a rare blend of skills that enables me to design websites that are both visually attractive and highly functional. My background in architecture has given me a profound appreciation for user-centered design, and I apply this principle to all my web development projects. I have a strong understanding of programming languages and design principles, which I use to create intuitive interfaces that enhance the user experience. Through my work, I aim to create websites that not only look good but also provide practical and meaningful solutions to real-world problems.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
