import React from 'react';

class Emp extends React.Component {
  render() {
    return <h2>I am a {this.props.data.name}!</h2>;
  }
}

export default Emp;