import React from "react";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="Dresses">DRESSES</Link> |
          <Link to="Tops">TOPS</Link> |
          <Link to="Outerwear">OUTERWEAR</Link> |
          <Link to="Bottoms">BOTTOMS</Link> |
          <Link to="Lingerie">LINGERIE</Link>

        </li>
      </ul>
    </div>
  );
};

export default Header;
