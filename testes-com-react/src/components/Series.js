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
const SeriesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=47baac08bd0da53c84230fe07a911cf7"
});

class Series extends Component {
  state = {
    series: [],
    searchList: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getSeries();
  }

  // Função que trás os dados da API
  getSeries = async () => {
    const response = await SeriesApi.get();
    console.log("Series:", response.data.results);

    const completeSeries = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      series: completeSeries,
      searchList: completeSeries
    });
  };

  handleChange = (event) => {
    const { series } = this.state;
    if(event.target.value === ""){
      this.setState({
        searchList: series
      })
      return;
    }
    const filterItemConvert = series.filter((item) => {
      if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
        return true;
      }
      return false;
    })
    this.setState({
      searchList: filterItemConvert
    })
  }

  render() {
    return (
      <section>
        <BoxInput>
          <Input type="text" 
          placeholder="Busque sua série..."
          onChange={this.handleChange}
          />
        </BoxInput>

        <div>
          {this.state.searchList.map((item, id) => (
            <div key={id}>
              <img src={item.poster_path} alt="" />
              <p>{item.name}</p>
              <p>{item.vote_average}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Series;