import React, {Component} from 'react';
import style from '../css/lista.module.css';

export default class Lista extends Component{
    render(){
        return(
            <div className={style.div}>
                <ul className={style.ul}>
                    <li>&nbsp;Dollor sit amet abin coin said upper;</li>
                    <li>&nbsp;Aint no sunfiun weri gasty non;</li>
                    <li>&nbsp;Dollor sit amet abin coin said upper.</li>
                    <li>&nbsp;Aint no sunfiun weri gasty non;</li>
                    <li>&nbsp;Dollor sit amet abin coin said upper.</li>
                    <li>&nbsp;Aint no sunfiun weri gasty non;</li>
                </ul>
            </div>
        );
    }
}