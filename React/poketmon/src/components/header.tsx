import {BrowserRouter, Link} from 'react-router-dom';
import styles from './header.module.css';

export default function Header() {
    return (
      <div className={styles.header}> 
        <Link to="/">
        <h1 className={styles.h1}>Poketmon List</h1>
        </Link>
        
      </div>
    );
  }
