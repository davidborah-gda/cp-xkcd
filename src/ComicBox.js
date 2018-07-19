import React, { Component } from 'react';
import './ComicBox.css';
import axios from 'axios';

class ComicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      comic: {},
      success: false,
      error: null,
    };
  }

  componentDidMount() {
    // const url = 'https://xkcd.com/614/info.0.json';
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    axios.get(url).then((response) => {
      this.setState({
        comic: response.data,
        success: true,
      });
    }).catch((error) => {
      this.setState({
        success: false,
        error,
      });
    });
  }

  render() {
    const { success, error } = this.state;
    if (error) {
      return (
        <p>
           Stuff done broke
        </p>
      );
    }
    if (!success) {
      return (
        <h1>
            Loading...
        </h1>
      );
    }
    return (
      <div className="ComicBox-container">
        Here Be Comics
      </div>
    );
  }
}

export default ComicBox;
