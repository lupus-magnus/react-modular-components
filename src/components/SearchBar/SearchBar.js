import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import glass from '../../imgs/glass.svg'

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.searchField}>
                <img className={styles.glassIcon} src={glass} />
                <input placeholder={'My favorite search bar!'} className={styles.searchBar} />
            </div>
         );
    }
}
 
export default SearchBar;