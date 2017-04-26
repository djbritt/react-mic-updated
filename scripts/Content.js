import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ReactMic
}
from 'react-mic';

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    };
    this.onClick = this.startRecording.bind(this);
    this.onClick = this.stopRecording.bind(this);
  }
  startRecording = () => {
    console.log("Start")
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    console.log("Stop")
    this.setState({
      record: false
    });
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    return (
      <div>
      <ReactMic
        record={this.state.record}
        className="sound-wave"
        onStop={this.onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081" />
      <button onClick={this.startRecording} type="button">Start</button>
      <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}
