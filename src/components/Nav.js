import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <i className="fa-solid fa-house"></i>
      </Link>

      <Link to="/reviews/strategy">Strategy</Link>

      <Link to="/reviews/hidden-roles">Hidden-roles</Link>

      <Link to="/reviews/dexterity">Dexterity</Link>

      <Link to="/reviews/push-your-luck">Push-your-luck</Link>

      <Link to="/reviews/roll-and-write">Roll-and-write</Link>

      <Link to="/reviews/deck-building">Deck-building</Link>

      <Link to="/reviews/engine-building">Engine-building</Link>
    </nav>
  );
};

export default Nav;
