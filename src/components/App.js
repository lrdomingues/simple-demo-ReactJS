import React, {Component} from "react";
import Header from '../components/Header';
import Info from '../components/Info';
import Body from '../components/Body';
import Destaque from '../components/Destaque';
import Lista from '../components/Lista';
import Books from '../components/Books';
import Box from '../components/Box';
import Tags from '../components/Tags';
import Curtir from '../components/Curtir';
import TextoLink from '../components/TextoLink';
import '../css/layout.css';

export default class App extends Component{
  render(){
    return(
        <div className="conteiner">
          <div className="header">
            <Header />
          </div>

          <div className="barra1">
            <Info />
          </div>
          
          <div className="barra2">
            <br/>
            <Curtir />
          </div>

          <div className="titulo1">
            <Body />
          </div>
         
          <div className="conteudo">
            <Body />
            <Destaque />
            <Body />
            <Lista />
          </div>
          
          <div className="books">
            <Books />
          </div>
          
          <div className="titulo2">
            <Body />
            <Lista />
          </div>

          <div className="books2">
            <Books />
          </div>

          <div className="titulo3">
            <TextoLink />
          </div>

          <div className="box">
            <Box />
          </div>

          <div className="titulo4">
            <Body />
          </div>

          <div className="tags">
            <Tags />
          </div>

          <div className="barra3">
            <a href="https://web.whatsapp.com/"><img src={require('../assets/if-whatsapp-853339@2x.png')} alt='whatsapp' width='20px'/></a>&nbsp;&nbsp;
            <a href="https://pt-br.facebook.com/"><img src={require('../assets/if-entoni-facebook-330869@2x.png')} alt='facebook' width='12px'/></a>&nbsp;&nbsp;
            <a href="https://twitter.com/login?lang=pt"><img src={require('../assets/twiter@2x.png')} alt='twiter' width='25px'/></a>&nbsp;&nbsp;
            <a href="https://br.linkedin.com/"><img src={require('../assets/if-linkedin-853357@2x.png')} alt='linkedin' width='20px'/></a>&nbsp;&nbsp;
            <a href="https://outlook.live.com/owa/"><img src={require('../assets/mail@2x.png')} alt='mail' width='23px'/></a>&nbsp;&nbsp;
            <a href="www.google.com.br"><img src={require('../assets/clap-gray-3@2x.png')} alt='maos' width='28px'/></a>&nbsp;&nbsp;<b className="b">37</b>
          </div>
        </div>
    );
  }
}