"use client";
import Link from "next/link";
import styles from "./navlinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ link }) => {
  const path = usePathname();
  return (
    <Link
      href={link.path}
      className={`${styles.li} ${path === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  );
};
export default NavLinks;
