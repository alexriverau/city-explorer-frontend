import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Error extends React.Component {
  render() {
    return (
      <Container style={{ width: '25rem' }}>
        <Card className='m-4'>
          <Card.Text id='error'> {this.props.error} </Card.Text>
        </Card>
      </Container>
    );
  }
}

export default Error;
