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
          :3
        </div>
      </nav>
    </div>
  )
};

export default Navbar;