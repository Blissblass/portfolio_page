import { useState } from 'react';
import '../../Assets/Stylesheets/navbar.css';

const Navbar = () => {
  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    setShowSection(old => !old);
  };

  const handleScroll = (attr) => {
    const ele = document.querySelector(`.${attr}`);
    ele.scrollIntoView(true);
  };

  return(
    <div>
      <nav className="navbar">
        <div className={`nav-button${showSection ? " nav-open" : ""}`} onClick={handleClick}>
          <hr className="nav-line-1" />
          <hr className="nav-line-2"  />
          <hr className="nav-line-3"  />
        </div>
        <div className={`nav-section${showSection ? " section-active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-list-item" data-key="welcome-container" onClick={(e) => handleScroll(e.target.getAttribute("data-key"))}>
              Welcome
            </li>
            <li className="nav-list-item" data-key="works-container" onClick={(e) => handleScroll(e.target.getAttribute("data-key"))}>
              My Works
            </li>
            <li className="nav-list-item" data-key="bio-container" onClick={(e) => handleScroll(e.target.getAttribute("data-key"))}>
              About Me
            </li>
            <li className="nav-list-item" data-key="bio-container" onClick={(e) => handleScroll(e.target.getAttribute("data-key"))}>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;