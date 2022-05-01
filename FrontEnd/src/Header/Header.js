import React from "react";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="Dress">DRESS</Link> |
          <Link to="Top">TOPS</Link> |
          <Link to="Outerwear">OUTERWEAR</Link> |
          <Link to="Bottom">BOTTOMS</Link> |
          <Link to="Accessories">ACCESSORIES</Link> |
          <Link to="Lingerie">LINGERIE</Link>

        </li>
      </ul>
    </div>
  );
};

export default Header;
