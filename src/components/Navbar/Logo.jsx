import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="navbar-brand fw-bold fs-3 logo">
      BlezineWears
    </NavLink>
  );
}

export default Logo;
