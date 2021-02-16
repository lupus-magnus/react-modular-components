import React, { Component } from 'react';
import styles from './Nav.module.css';

class Nav extends Component {
    state = { 
        sidebarOn: false,
        showBurger: false
    }

    componentDidMount(){
        let width = window.innerWidth;
        (width < 768) ? this.setState({showBurger: true}) : this.setState({showBurger: false})
    }

    toggleSidebar () {
        console.log(`Toggled! Key: ${((Math.random()*100).toFixed(2)*100).toFixed(0)}`)
        console.log(`sidebar: ${this.state.sidebarOn}`)
       
        //toggla o active do sidebar
        //nav.classList.toggle('navActive');
        this.setState({sidebarOn: !this.state.sidebarOn})
        
        //Animação de cada item do nav
        // navLinks.forEach((link, index) => {
        //     (link.style.animation) ? link.style.animation = ''
        //     :
        //     link.style.animation = `navLinkFade 0.5s ease forwards ${ 0.6 + index / 10}s`;
        // })
    }

    render() { 
        let toggled = (this.state.sidebarOn ? 'navActive' : '');
        
        let navUnactive = {
            position: 'absolute',
            top: '8vh',
            height: '92vh',
            right: '0px',
            backgroundColor: '#353839',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '50%',
            transform: 'translateX(100%)',
            transition: 'transform 0.5s ease-in',
        }
        let navActive ={
            position: 'absolute',
            top: '8vh',
            height: '92vh',
            right: '0px',
            backgroundColor: '#353839',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '50%',
            transform: 'translateX(0)',
            transition: 'transform 0.5s ease-in',
        }
        
         

        return ( 

            <nav>
                <div className={styles.logo}>
                    <h4>THE NAV</h4>
                </div>
                <ul style={this.state.showBurger ? (this.state.sidebarOn ? navActive : navUnactive): {}} className={`${styles.navLinks}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <div className={styles.burger} onClick={() => { this.toggleSidebar() }}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </nav>


        );
    }
}
 
export default Nav;
