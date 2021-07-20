// imports
import React, { Component } from "react";
import axios from "axios";

// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=47baac08bd0da53c84230fe07a911cf7"
});

class Movies extends Component {
  state = {
    movies: []
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
      movies: completeMovies
    });
  };

  render() {
    return (
      <section>
        <div>
          <h2>FILMES</h2>
        </div>

        <div>
          {this.state.movies.map((item, id) => (
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