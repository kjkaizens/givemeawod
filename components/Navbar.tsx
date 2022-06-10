import styles from "../styles/Home.module.css"
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


function Navbar(){
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }


  return (
    <nav className={styles.navbar}>
    <button onClick={handleToggle} className={styles.navbarButtonSpace} >
      {navbarOpen ? (
        <MdClose className={styles.navbarButton}/>
      ) : (
        <FiMenu className={styles.navbarButton}/>
      )}
    </button>
        {/* <ul className={`menuNav ${navbarOpen ? " showMenu" : "Lets see whats heree"}`}>...</ul> */}
        <div className={styles.navbarTitle}>Workout of day</div>
    </nav>
  );


}


export default Navbar;