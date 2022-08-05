import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Explore extends React.Component {
  render() {
    return (
      <Container className='App'>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label id='label'>Search for a City</Form.Label>
            <Form.Control
              id='input'
              placeholder='enter city'
              onChange={this.props.searchLocation}
            ></Form.Control>
            <Button onClick={this.props.clickHandler} variant='primary' type='submit'>
              Explore!
            </Button>
          </Form.Group>
        </Form>
        {this.props.location.place_id && (
          <>
            <h2>City: {this.props.location.display_name}</h2>
            <p>
              Lat / Lon: {this.props.location.lat}, {this.props.location.lon}
            </p>
          </>
        )}
      </Container>
    );
  }
}

export default Explore;
