import React, {Component} from 'react';
import styles from '../css/info.module.css';

export default class Info extends Component{
    render(){
        return(
            <div className={styles.div}>
                <div>
                    CATEGORIA:<font color="#FFA500">&nbsp;POR ONDE COMEÇAR</font>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className={styles.img} src={require('../assets/calendar-green@2x.png')} alt="calendario"/>&nbsp;&nbsp;<b className={styles.wrapper}>01/ABRIL/2018</b>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className={styles.img} src={require('../assets/clock-green@2x.png')} alt="relogio"/>&nbsp;&nbsp;<b className={styles.wrapper}>7 MIN LEITURA</b>
                </div>
            </div>
        );
    }
}