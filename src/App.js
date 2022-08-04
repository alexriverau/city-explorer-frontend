import React from 'react';
import './App.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: {},
    };
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.search}&format=json`;
    console.log('URL: ', url);
    const response = await axios.get(url);
    console.log('Response Display Name: ', response.data[0]);
    this.setState({ location: response.data[0] });
  };

  render() {
    return (
      <Container className='App'>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label id='label'>Search for a City</Form.Label>
            <Form.Control
              id='input'
              placeholder='enter city'
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
            ></Form.Control>
            <Button variant='primary' onClick={this.getLocation}>
              Explore!
            </Button>
          </Form.Group>
        </Form>
        {this.state.location.place_id && (
          <>
            <h2>City: {this.state.location.display_name}</h2>
            <p>
              Lat / Lon: {this.state.location.lat}, {this.state.location.lon}
            </p>
          </>
        )}
      </Container>
    );
  }
}

export default App;
