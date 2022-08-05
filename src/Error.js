import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <>
      <h4>{this.props.error}</h4>
      </> 
    );
  }
}

export default Error;
