import React, { Component } from 'react';
import './App.css';

import io from 'socket.io-client';

const socket = io('http://localhost:5000');

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.state && this.state.imageSrc && 
          <img src={this.state.imageSrc} />
        }
      </div>
    );
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log('connected to server!');
    });

    socket.on('frame', frameData => {
      console.log('got frame data');
      this.setState({ imageSrc: frameData });
    });
  }
}

export default App;
