import React from 'react';
import styles from './mega.menu.module.css'; 
//Horizontal Navigation Bar

const MegaMenu = () => {
    return (
        
        <div className={styles.navbar}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Countact</a>
            <a href="#news">News</a>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown
                    <i className={styles.fa}></i>
                </button>
                <div className={styles.dropdownContent}>
                    <div className={styles.header}>
                        <h2>Mega Menu</h2>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <h3>Category 1</h3>
                            <a href="/link1">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <div className={styles.column}>
                            <h3>Category 2</h3>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <div className={styles.column}>
                            <h3>Category 3</h3>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MegaMenu;