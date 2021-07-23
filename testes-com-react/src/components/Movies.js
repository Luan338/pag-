// imports
import React, { Component } from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

//Estilização

const BoxInput = styled.div`
height: 8vw;
display: flex;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
padding: 10px 355px;
border-style: none;
background: #512e8b;
`;

// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=47baac08bd0da53c84230fe07a911cf7"
});

class Movies extends Component {
  state = {
    movies: [],
    filterList: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getMovies();
  }

  // Função que trás os dados da API
  getMovies = async () => {
    const response = await MoviesApi.get();
    console.log("Filmes:", response.data.results);

  const completeMovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `http://image.tmdb.org/t/p/w300${item.poster_path}`
      };
    });

    this.setState({
      movies: completeMovies,
      filterList: completeMovies
    });
  };

  handleChange = (event) => {
    const { movies } = this.state;
    if(event.target.value === ""){
      this.setState({
        filterList: movies
      })
      return; 
    }
    const filterItensConvert = movies.filter((item) => {
      if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
        return true;
      }
      return false;
    })
    this.setState({
      filterList: filterItensConvert
    })
  }

  render() {
    return (
      <section>
        <BoxInput>
          <Input type="text" 
          placeholder="Busque seu filme..." 
          onChange={this.handleChange}
          />
        </BoxInput>

        <div>
          {this.state.filterList.map((item, id) => (
            <div key={id}>
              <img src={item.poster_path} alt="" />
              <p>{item.title}</p>
              <p>{item.vote_average}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Movies;