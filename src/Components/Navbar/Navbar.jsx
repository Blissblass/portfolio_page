import { useState } from 'react';
import '../../Assets/Stylesheets/navbar.css';

const Navbar = () => {
  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    setShowSection(old => !old);
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
            <li className="nav-list-item">Welcome</li>
            <li className="nav-list-item">My Works</li>
            <li className="nav-list-item">About Me</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;