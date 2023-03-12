import NavLinks from "./NavLinks";
import logo from "../images/tewonav.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" style={{backgroundColor:"tomato", borderRadius:"50%"}}/>
      <NavLinks />
    </header>
  );
};

export default Header;
