import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Tewogbade Tella",
    location: "Lagos, Nigeria",
    tagline: "",
    email: "tewogbade3008@gmail.com",
    availability: "Open for work",
    brand:
      "As a front end developer with a background in architecture, I bring a unique set of skills to the table. Combining my expertise in both fields, I have the ability to create websites that seamlessly blend aesthetics and functionality. Drawing from my architectural background, I deeply value user-centered design and incorporate this principle into every aspect of my web development projects. With a solid understanding of programming languages and design principles, I craft intuitive interfaces that elevate the user experience. My ultimate goal is to develop websites that not only showcase appealing visuals but also offer practical and impactful solutions to real-world challenges.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
