import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  getWeather = async () => {
    const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=seattle`;
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

        <Container style={{ width: '18rem' }}>
          <Card className='mt-4'>
            {this.state.weather.length > 0 &&
              this.state.weather.map((city, idx) => (
                <Card.Body key={idx}>
                  <Card.Title>Weather</Card.Title>
                  <Card.Text>Date: {city.date}</Card.Text>
                  <Card.Text>Forecast: {city.description}</Card.Text>
                </Card.Body>
              ))}
          </Card>
        </Container>
      </Container>
    );
  }
}

export default Weather;
