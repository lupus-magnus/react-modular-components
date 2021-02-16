import React, { Component } from 'react';
import styles from './Slider.module.css';
import img1 from '../../imgs/1.jpg';
import img2 from '../../imgs/2.jpg';


class Slider extends Component {
    
    render() { 
        return ( 
            <div className={styles.sliderOutContainer}>
                <div className={styles.nextBtn}>{'>'}</div>
                <div className={styles.prevBtn}>{'<'}</div>
                <div className={styles.sliderInsideContainer}>
                    <img className={styles.slidePhoto} src={img1} />
                </div>    
            </div>
         );
    }
}
 
export default Slider;