import styles from "./Footer.module.css";

import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.row}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/#">
                <AiFillLinkedin style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className={styles.item}>
              <a href="/#">
                <AiOutlineInstagram style={{ fontSize: "24px" }} />
              </a>
            </li>
            <li className={styles.item}>
              <a href="/#">
                <AiOutlineFacebook style={{ fontSize: "24px" }} />
              </a>
            </li>
          </ul>

          <div className={styles.lic}>
            <p>&copy; 2023 Learnify Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
