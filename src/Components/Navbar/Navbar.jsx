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
        <div className="nav-button" onClick={handleClick}>
          <hr className="nav-line-1" />
          <hr className="nav-line-2"  />
          <hr className="nav-line-3"  />
        </div>
        {showSection ? 
          <div className="nav-section">
            :3
          </div>
        :
          null  
        }
      </nav>
    </div>
  )
};

export default Navbar;