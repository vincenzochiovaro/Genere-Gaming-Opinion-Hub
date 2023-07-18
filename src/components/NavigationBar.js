import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <div className="navbar__container">
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar__navbar"
        expanded={expanded}
        onSelect={handleSelect}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`navbar__toggle ${expanded ? "active" : ""}`}
          onClick={toggleExpanded}
        >
          <span className="navbar__toggle-icon"></span>
          <span className="navbar__toggle-icon"></span>
          <span className="navbar__toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar__collapse">
          <Nav className="me-auto navbar__nav">
            <Link to="/" className="navbar__link">
              <i className="fa-solid fa-house"></i>
            </Link>

            <Link to="/reviews/strategy" className="navbar__link">
              Strategy
            </Link>

            <Link to="/reviews/hidden-roles" className="navbar__link">
              Hidden Roles
            </Link>

            <Link to="/reviews/dexterity" className="navbar__link">
              Dexterity
            </Link>

            <Link to="/reviews/push-your-luck" className="navbar__link">
              Push Your Luck
            </Link>

            <Link to="/reviews/roll-and-write" className="navbar__link">
              Roll and Write
            </Link>

            <Link to="/reviews/deck-building" className="navbar__link">
              Deck Building
            </Link>

            <Link to="/reviews/engine-building" className="navbar__link">
              Engine Building
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
