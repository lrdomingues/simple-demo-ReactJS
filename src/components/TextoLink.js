import React, {Component} from 'react';

export default class TextoLink extends Component{
    render(){
        return(
            <div>
                <h2 className="h2">Aint oupt sain crays</h2>
                <p className="p">
                    O Lorem Ipsum é um texto modelo da <a href="www.google.com.br" className="a">indústria tipográfica</a> e de impressão. 
                    O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os 
                    caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto 
                    para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização 
                    das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o 
                    Aldus PageMaker que incluem versões do Lorem Ipsum.
                </p>
            </div>
        );
    }
}