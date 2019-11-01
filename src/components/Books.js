import React, {Component} from 'react';
import style from '../css/books.module.css';

export default class Books extends Component{
  constructor(props){
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.items,
        })
      });
    }

  render(){
    var { isLoaded, items } = this.state;

    if(!isLoaded)
    {
      return <div> Carregando... </div>;
    }
    else
    {
      return(
        <div>
          <div className={style.div}>
            {items.map(items => (
              <div key={items.id} className={style.div}>
                <img className={style.img} src={items.volumeInfo.imageLinks.smallThumbnail} alt="harry_potter"/>
              </div>
            ))}
          </div>  
        </div>
      );
    }
  }
}