import React from 'react';
import axios from 'axios';
import Explore from './Explore';
import Map from './Map';
import Error from './Error';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: {},
      error: '',
    };
  }

  getLocation = async () => {
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.search}&format=json`;
      console.log('URL: ', url);
      const response = await axios.get(url);
      console.log('Response Display Name: ', response.data[0]);
      this.setState({ location: response.data[0] });
    } catch (error) {
      if (error.response) {
        this.setState({error: `Error: ${error.response.data.error} - Status: ${error.response.status}`});
      }
    }
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.getLocation();
  };

  searchLocation = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        <Explore
          location={this.state.location}
          search={this.state.search}
          clickHandler={this.clickHandler}
          searchLocation={this.searchLocation}
        />
        <Map lat={this.state.location.lat} lon={this.state.location.lon} />
        <Error error={this.state.error} />
      </>
    );
  }
}

export default Main;
