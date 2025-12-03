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
      "As an architect who also works in front-end development, I bring a perspective that’s shaped by spatial thinking, structure, and design clarity. My architectural training makes me pay attention to how people move through a space, and I carry that same mindset into digital spaces. I think about flow, balance, and usability before anything else. I’m comfortable with the tools and languages needed for front-end work, but what really drives me is creating interfaces that feel intentional and intuitive. I like building websites that look clean, work well, and solve real problems without feeling complicated. My goal is always to combine good design sense with practical function, the same way I would with any building or physical space.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
