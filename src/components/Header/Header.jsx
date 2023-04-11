import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import {
  MdCastForEducation,
  MdOutlineEmojiPeople,
  MdOutlineContactless,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiStackOverflowFill } from "react-icons/ri";

import styles from "./Header.module.css";

import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <MdCastForEducation />
            <NavLink to="/">Learnify</NavLink>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <NavLink to="/" className={styles.link}>
                  Home <AiOutlineHome />
                </NavLink>
              </li>
              <li>
                <NavLink to="courses" className={styles.link}>
                  Courses
                  <RiStackOverflowFill />
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={styles.link}>
                  About Us
                  <MdOutlineContactless />
                </NavLink>
              </li>
              <li>
                <NavLink to="contacts" className={styles.link}>
                  Contact Us
                  <MdOutlineEmojiPeople />
                </NavLink>
              </li>
            </ul>
          </nav>
          {isOpen && <MobileMenu />}
          <div className={styles.burger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
