import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
  render() {
    return (
      <Col>
        {this.props.lat && (
          <Image
            className='d-block mx-auto'
            alt='map'
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.lat},${this.props.lon}&zoom=18&size=480x480`}
          ></Image>
        )}
      </Col>
    );
  }
}

export default Map;
