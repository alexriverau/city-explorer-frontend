import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Error from './Error';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      error: '',
    };
  }

  getWeather = async (lat, lon) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.props.lat}&lon=${this.props.lon}`;
      const response = await axios.get(url);
      console.log(response);
      this.setState({ weather: response.data });
    } catch (error) {
      if (error.response) {
        this.setState({
          error: `Error: ${error.response.data.error} - Status: ${error.response.status}`,
        });
      }
    }
  };

  render() {
    return (
      <Container id='weather'>
        <Button onClick={this.getWeather} variant='info' type='submit'>
          Weather
        </Button>
        <Container style={{ width: '18rem' }}>
          <Card className='m-4'>
            {this.state.weather.length > 0 &&
              this.state.weather.map((day, idx) => (
                <WeatherDay 
                key={idx} 
                // city={city}
                date={day.day}
                description={day.description} 
                />
              ))}
          </Card>
        </Container>
        <Error error={this.state.error} />
      </Container>
    );
  }
}

class WeatherDay extends React.Component {
  render() {
    return (
      <Card.Body key={this.props.idx}>
        <Card.Title>Weather</Card.Title>
        <Card.Text>Date: {this.props.date}</Card.Text>
        <Card.Text>Forecast: {this.props.description}</Card.Text>
      </Card.Body>
    );
  }
}

export default Weather;
