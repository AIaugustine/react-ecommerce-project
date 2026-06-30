import { useState } from "react";

import "./Navbar.css";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";

function Navbar() {
  const [cartCount] = useState(2);

  return (
    <nav className="shadow-sm">
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <Logo />
          </div>

          <div className="col-lg-6 my-3 my-lg-0">
            <SearchBar />
          </div>

          <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0">
            <NavActions cartCount={cartCount} />
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bottom-nav">
        <div className="container">
          <button
            className="navbar-toggler bg-light"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <NavLinks />
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
