import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Category",
    path: "/category",
  },

  {
    name: "Cart",
    path: "/cart",
  },

  {
    name: "Checkout",
    path: "/checkout",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <ul className="navbar-nav mx-auto">
      {links.map((link) => (
        <li className="nav-item" key={link.path}>
          <NavLink to={link.path} className="nav-link">
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
