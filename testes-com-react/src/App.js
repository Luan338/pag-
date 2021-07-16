import React, { Component } from 'react';
import Movies from "./services/Movies";
import Logo from "./img/logo.png";
import "./styled.css";

class Atividade extends Component{

  state = {
    movies: []
  }

  componentDidMount(){
    this.getMovies();
  }


  getMovies = async () => {
    const response = await Movies.get()
    console.log(response.data.results)

    this.setState({
      movies: response.data.results
    })
  }

  render(){
    return(
      <section>
        {/*inicio do cabeçalho*/}
        <div className="BoxHeader">
          <div className="BoxTitle">
            <img className="Logo" src={Logo} allt="logo"/>
          </div>
          <ul className="BoxList">
            <li><a className="List" href="#">Início</a></li>
            <li><a className="List" href="#">Séries</a></li>
            <li><a className="List" href="#">Filmes</a></li>
            <li><a className="List" href="#">Bombando</a></li>
            <li><a className="List" href="#">Minha lista</a></li>
          </ul>
        </div>
        {/*fim do cabeçalho*/}
        
        {/*inicio do corpo*/}
        <div className="BoxImgs">
          {this.state.movies.map((item, id) => (
            <div>
              <div>
                <img src={"http://image.tmdb.org/t/p/w300" + item.backdrop_path} alt="imagem"/>
              </div>
              {/*<ul key="id">
                <li>{item.title}</li>
                <li>{item.id}</li>
                <li>{item.adult}</li>
              </ul>*/}
            </div>
            ))}
        </div>   
        {/*fim do corpo*/}
      </section>
    );
  }
}
export default Atividade;
