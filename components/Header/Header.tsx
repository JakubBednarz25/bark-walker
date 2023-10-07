import styles from "./Header.module.scss";

import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.businessName} href={"/"}>BarkWalker</Link>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Link href={"/"}>Log in</Link>
    </header>
  );
};

export default Header;
