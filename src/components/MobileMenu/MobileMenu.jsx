import { NavLink } from "react-router-dom";
import {
  MdCastForEducation,
  MdOutlineEmojiPeople,
  MdOutlineContactless,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiStackOverflowFill } from "react-icons/ri";
import styles from "./MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <nav className={styles.navMobile}>
      <div className={styles.logoMobile}>
        <MdCastForEducation />
        <NavLink to="/">Learnify</NavLink>
      </div>
      <ul className={styles.listMobile}>
        <li>
          <NavLink to="/" className={styles.linkMobile}>
            Home <AiOutlineHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="courses" className={styles.linkMobile}>
            Courses
            <RiStackOverflowFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={styles.linkMobile}>
            About Us
            <MdOutlineContactless />
          </NavLink>
        </li>
        <li>
          <NavLink to="contacts" className={styles.linkMobile}>
            Contact Us
            <MdOutlineEmojiPeople />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
