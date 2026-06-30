import { useEffect } from "react";
import { Tooltip } from "bootstrap";

function NavActions({ cartCount }) {
  useEffect(() => {
    const triggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    [...triggerList].map((trigger) => new Tooltip(trigger));
  }, []);

  return (
    <div className="d-flex gap-4 fs-4">
      <i
        className="bi bi-person"
        data-bs-toggle="tooltip"
        data-bs-title="Account"></i>

      <i
        className="bi bi-heart"
        data-bs-toggle="tooltip"
        data-bs-title="Favorites"></i>

      <div className="position-relative">
        <i
          className="bi bi-cart"
          data-bs-toggle="tooltip"
          data-bs-title="Cart"></i>

        <span className="badge bg-dark rounded-pill position-absolute top-0 start-100 translate-middle">
          {cartCount}
        </span>
      </div>
    </div>
  );
}

export default NavActions;
