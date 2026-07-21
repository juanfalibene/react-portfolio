import Toggle from "./Toggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../LanguageContext";

export default function Navbar({ isOpen, toggleMenu, toggleMode }) {
  const { t } = useLanguage();

  return (
    <>
      <nav className='navbar' id='navbar'>
        <li className='nav-item menu-trigger' onClick={toggleMenu}>
          {isOpen ? t("close") : t("menu")}
        </li>
        <ul
          className={`navbar-items-container ${isOpen ? "is-open" : "is-close"
            }`}
        >
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#profile' alt='Profile'>
              {t("profile")}
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#works' alt='Works'>
              {t("works")}
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#blogs' alt='Blog'>
              {t("blog")}
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#projects' alt='Projects'>
              {t("projects")}
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#contact' alt='Contact'>
              {t("contact")}
            </a>
          </li>
          <LanguageToggle />
          <Toggle />
        </ul>
      </nav>
    </>
  );
}
