import "./Navbar.scss";

const nav = ["Home", "About", "Works", "Contact"];

const Navbar = () => {

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="navbar">
      <h1 className="logo">YUANKE</h1>
      <ul className="nav-links">
        {nav.map((item, index) => (
          <li key={index} onClick={() => handleScroll(item.toLowerCase())}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
