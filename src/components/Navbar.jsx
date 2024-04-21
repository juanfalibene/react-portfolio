import Toggle from "./Toggle";

export default function Navbar({ isOpen, toggleMenu, toggleMode }) {
  return (
    <>
      <nav className='navbar' id='navbar'>
        <li className='nav-item menu-trigger' onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </li>
        <ul
          className={`navbar-items-container ${
            isOpen ? "is-open" : "is-close"
          }`}
        >
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#works' alt='Works'>
              Works
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#profile' alt='Profile'>
              Profile
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#projects' alt='Projects'>
              Projects
            </a>
          </li>
          <li className='nav-item' onClick={toggleMenu}>
            <a href='#contact' alt='Contact'>
              Contact
            </a>
          </li>
          <Toggle />
        </ul>
      </nav>
    </>
  );
}
