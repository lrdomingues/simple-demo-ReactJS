import React, {Component} from 'react';
import foto from '../assets/foto.PNG';
import style from '../css/box.module.css';

export default class Box extends Component{
    render(){
        return(
            <div>
                <div className={style.blockquote}>
                    <h4 className={style.font}>DESIGN BETTER. FASTER. TOGETHER.</h4>
                    <span className={style.span}>
                        O Lorem Ipsum é um texto modelo da indústria 
                        tipográfica e de impressão. O Lorem Ipsum tem 
                        vindo a ser o texto padrão usado por estas 
                        indústrias desde o ano de 1500.
                    </span><br/><br/>
                        <img width="15px" src={require('../assets/calendar-green@2x.png')} alt="calendario"/>
                        &nbsp;&nbsp;
                        <b className={style.b}>01/ABRIL/2018</b>
                        &nbsp;&nbsp;
                        <img width="15px" src={require('../assets/clock-green@2x.png')} alt="relogio"/>
                        &nbsp;&nbsp;
                        <b className={style.b}>7 MIN LEITURA</b>
                        &nbsp;&nbsp;
                        <img width="19px" src={require('../assets/clap-gray-3@2x.png')} alt="palmas"/>
                        &nbsp;&nbsp;
                        <b className={style.b}>37</b>
                        &nbsp;&nbsp;
                        <img width="30px" src={foto} alt="foto"/>
                </div>
            </div>
        );
    }
}