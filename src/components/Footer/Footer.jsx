import "./Footer.css";
import { NavLink } from "react-router-dom";

const shopLinks = [
  "New Arrivals",
  "Best Sellers",
  "Women's Clothing",
  "Men's Clothing",
  "Accessories",
];

const supportLinks = [
  "Help Center",
  "Order Status",
  "Shipping Info",
  "Contact Us",
];

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Column 1 */}

          <div className="col-lg-4 col-md-6">
            <h3 className="footer-logo">BlezineWears</h3>

            <p className="footer-text">
              Discover premium fashion designed to help you look confident every
              day. From everyday essentials to statement pieces, we've got you
              covered.
            </p>

            <h6 className="mt-4">Connect with us</h6>

            <div className="social-icons mt-3">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}

          <div className="col-lg-2 col-md-6">
            <h5>Shop</h5>

            <div className="footer-line"></div>

            <ul className="footer-links">
              {shopLinks.map((item) => (
                <li key={item}>
                  <NavLink to="#">
                    <i className="bi bi-arrow-right-short"></i>

                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}

          <div className="col-lg-2 col-md-6">
            <h5>Support</h5>

            <div className="footer-line"></div>

            <ul className="footer-links">
              {supportLinks.map((item) => (
                <li key={item}>
                  <NavLink to="#">
                    <i className="bi bi-arrow-right-short"></i>

                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}

          <div className="col-lg-4 col-md-6">
            <h5>Contact Information</h5>

            <div className="footer-line"></div>

            <div className="contact-item">
              <i className="bi bi-geo-alt-fill"></i>

              <span>17 Murtula Avenue, Gwarinpa, FCT, Nigeria</span>
            </div>

            <div className="contact-item">
              <i className="bi bi-telephone-fill"></i>

              <span>+234 816 609 7691</span>
            </div>

            <div className="contact-item">
              <i className="bi bi-envelope-fill"></i>

              <span>support@blezinewears.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="mb-0 text-center">
            © {new Date().getFullYear()} BlezineWears. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
