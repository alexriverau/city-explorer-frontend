import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
      <Container style={{ width: '30rem' }}>
        <Accordion defaultActiveKey='0'>
          {this.props.movies.map((movie, idx) => (
            <Accordion.Item eventKey={idx}>
              <Accordion.Header>{movie.title}</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <Card.Img
                      id='movieImg'
                      style={{ width: '18rem' }}
                      src={movie.image_url}
                      alt={movie.overview}
                    />
                    <Card.Text id='movie'>{movie.overview}</Card.Text>
                    <Card.Text>Release Date: {movie.released_on}</Card.Text>
                    <Card.Text>Rating: {movie.average_votes}</Card.Text>
                    <Card.Text>Total Votes: {movie.total_votes}</Card.Text>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    );
  }
}

export default Movies;
