"use client"
import { useState } from "react";
import NavLinks from "../navlinks/NavLinks";
import styles from "./links.module.css";
const LinksPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const linksData = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
    <div className={isOpen ? styles.links__divmobile : styles.links__div}>
      {linksData.map((link) => {
        return [<NavLinks key={link.title} link={link} />];
      })}
      {session ? (
        <>
        {isAdmin && <NavLinks link={{ title: "  Admin", path: "/admin" }} />}
        <button className={styles.logout}>logout</button>
        </>
      ) : (
        <NavLinks link={{ title: "Login", path: "/login" }} />
      )}
    </div> 
     {isOpen ? <div className={styles.menu} onClick={handleClick}>close</div> : <div className={styles.menu} onClick={handleClick}>menu</div>}
    {/* {isOpen && (
        <div className={styles.links__divmobile}>
          {linksData.map((link) => (
            <NavLinks key={link.title} link={link} />
          ))}
        </div>
      )} */}
    </div>
  );
};
export default LinksPage;
