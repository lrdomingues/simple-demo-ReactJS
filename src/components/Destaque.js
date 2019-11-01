import React, {Component} from 'react';
import style from '../css/destaque.module.css';

export default class Destaque extends Component{
    render(){
        return(
            <div>
                <h2 className={style.h2}>
                    <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua dollor sit amet aint.
                    </blockquote>                    
                </h2>
            </div>
        );
    }
}