import React, {Component} from 'react';
import style from '../css/tags.module.css';

export default class Tags extends Component{
    render(){
        return(
            <div className={style.tags}>
                <b className={style.b}>TAGS:</b>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=DIY&oq=DIY&aqs=chrome..69i57j0l5.1840j0j7&sourceid=chrome&ie=UTF-8" className={style.wrapper}>DIY</a>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=Vendas&oq=Vendas&aqs=chrome..69i57j0l5.3496j0j9&sourceid=chrome&ie=UTF-8" className={style.wrapper}>Vendas</a>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=Aplicativo&oq=Aplicativo&aqs=chrome..69i57j35i39j0l3j69i60.3324j1j9&sourceid=chrome&ie=UTF-8" className={style.wrapper}>Aplicativo</a>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=Lorem&oq=Lorem&aqs=chrome..69i57j69i59l2j0l3.1228j0j9&sourceid=chrome&ie=UTF-8" className={style.wrapper}>Lorem</a>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=Lorem&oq=Lorem&aqs=chrome..69i57j69i59l2j0l3.1228j0j9&sourceid=chrome&ie=UTF-8" className={style.wrapper}>Ipsum</a>&nbsp;&nbsp;
                <a href="https://www.google.com/search?q=Lorem&oq=Lorem&aqs=chrome..69i57j69i59l2j0l3.1228j0j9&sourceid=chrome&ie=UTF-8" className={style.wrapper}>Amet</a>
            </div>
        );
    }
}