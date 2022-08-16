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
            <Movie idx={idx} movie={movie} />
          ))}
        </Accordion>
      </Container>
    );
  }
}

class Movie extends React.Component {
  render() {
    return (
      <Accordion.Item eventKey={this.props.idx}>
        <Accordion.Header>{this.props.movie.title}</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Body>
              <Card.Img
                id='movieImg'
                style={{ width: '18rem' }}
                src={this.props.movie.image_url}
                alt={this.props.movie.overview}
              />
              <Card.Text id='movie'>{this.props.movie.overview}</Card.Text>
              <Card.Text>
                Release Date: {this.props.movie.released_on}
              </Card.Text>
              <Card.Text>Rating: {this.props.movie.average_votes}</Card.Text>
              <Card.Text>Total Votes: {this.props.movie.total_votes}</Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
}

export default Movies;
