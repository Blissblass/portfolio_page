import { useState } from "react";
import "../../Assets/Stylesheets/navbar.css";
import listItemData from "./listItemData";
import NavbarListItem from "./NavbarListItem";

const Navbar = () => {
  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    setShowSection((old) => !old);
  };

  const handleScroll = (attr) => {
    const ele = document.querySelector(`.${attr}`);
    ele.scrollIntoView(true);
    setShowSection(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div
          className={`nav-button${showSection ? " nav-open" : ""}`}
          onClick={handleClick}
        >
          <hr className="nav-line-1" />
          <hr className="nav-line-2" />
          <hr className="nav-line-3" />
        </div>
        <div className={`nav-section${showSection ? " section-active" : ""}`}>
          <ul className="nav-list">
            {listItemData.map((data) => (
              <NavbarListItem
                key={data.text}
                text={data.text}
                attr={data.attr}
                handleScroll={handleScroll}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
