import React, {Component} from 'react';
import foto from '../assets/foto.PNG';
import styles from '../css/header.module.css';

export default class Header extends Component{
    render(){
        return(
            <div className={styles.div}>
                <img src={foto} alt="foto"/>
                <h1 className={styles.h1}>DESIGN BETTER. FASTER. TOGETHER.</h1>
                <h3 className={styles.h3}>The digital product design plataform powering the world's best user experiences</h3>
            </div>
        );
    }
}