import Toggle from "./Toggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../LanguageContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ isOpen, toggleMenu }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    toggleMenu();
  };

  return (
    <>
      <nav className='navbar' id='navbar'>
        <li className='nav-item menu-trigger' onClick={toggleMenu}>
          {isOpen ? t("close") : t("menu")}
        </li>
        <ul
          className={`navbar-items-container ${
            isOpen ? "is-open" : "is-close"
          }`}
        >
          <li className='nav-item' onClick={toggleMenu}>
            <Link to='/services' className='nav-services-link'>
              {t("services")}
            </Link>
          </li>
          <li className='nav-item'>
            <button
              className='nav-scroll-btn'
              onClick={() => scrollToSection("profile")}
            >
              {t("profile")}
            </button>
          </li>
          <li className='nav-item'>
            <button
              className='nav-scroll-btn'
              onClick={() => scrollToSection("works")}
            >
              {t("works")}
            </button>
          </li>
          <li className='nav-item'>
            <button
              className='nav-scroll-btn'
              onClick={() => scrollToSection("blogs")}
            >
              {t("blog")}
            </button>
          </li>
          <li className='nav-item'>
            <button
              className='nav-scroll-btn'
              onClick={() => scrollToSection("projects")}
            >
              {t("projects")}
            </button>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <Link to='/contact' className='nav-services-link'>
              {t("contact")}
            </Link>
          </li>
          <LanguageToggle />
          <Toggle />
        </ul>
      </nav>
    </>
  );
}
