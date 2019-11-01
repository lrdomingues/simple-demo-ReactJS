import React, {Component} from 'react';

export default class Curtir extends Component{
    constructor(){
        super();
        this.state = {
            contador: 37,
        };
    }

    incrementar(){
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    render(){
        return(
            <div>
                <img src={require('../assets/clap-gray-3@2x.png')} alt='maos' width='34px' onClick={this.incrementar.bind(this)}/><br/>
                <b>{this.state.contador}</b><br/><br/>
                <a href="https://web.whatsapp.com/"><img src={require('../assets/if-whatsapp-853339@2x.png')} alt='whatsapp' width='23px'/></a><br/><br/>
                <a href="https://pt-br.facebook.com/"><img src={require('../assets/if-entoni-facebook-330869@2x.png')} alt='facebook' width='17px'/></a><br/><br/>
                <a href="https://twitter.com/login?lang=pt"><img src={require('../assets/twiter@2x.png')} alt='twiter' width='25px'/></a><br/><br/>
                <a href="https://br.linkedin.com/"><img src={require('../assets/if-linkedin-853357@2x.png')} alt='linkedin' width='20px'/></a><br/><br/>
                <a href="https://outlook.live.com/owa/"><img src={require('../assets/mail@2x.png')} alt='mail' width='25px'/></a>
            </div>
        );
    }
}