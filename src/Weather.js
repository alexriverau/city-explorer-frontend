import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  getWeather = async () => {
    const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=amman`;
    const response = await axios.get(url);
    console.log(response);
    this.setState({ weather: response.data });
  };

  render() {
    return (
      <Container id='weather'>
        <Button onClick={this.getWeather} variant='info' type='submit'>
          Weather
        </Button>

        <ul>
          {this.state.weather.length > 0 &&
            this.state.weather.map((city, idx) => (
              <li key={idx}>
                <p>
                  Forecast: {city.date} {city.description}
                </p>
              </li>
            ))}
        </ul>
      </Container>
    );
  }
}

export default Weather;
