import Link from 'next/link'
import styles from "../styles/Home.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarTitle}> Workout of the day</div>
    </nav>
    // <div style={styles}>
    //   <Link href='/'>
    //     <a>Home Page</a>
    //   </Link>
    //   <Link href='/about'>
    //     <a>About a Link</a>
    //   </Link>
    //   <Link href='/contact'>
    //     <a>Contact Page</a>
    //   </Link>
    // </div>
  );
};

export default Navbar;