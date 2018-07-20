import React, { Component } from 'react';
import './ComicBox.css';
import axios from 'axios';

class ComicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      comic: {},
      success: false,
      error: null,
    };
  }

  componentDidMount() {
    const { number } = this.state;
    const url = `http://localhost:7042/comic/${number}`;
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
    const { success, error, comic } = this.state;
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
        <h1>
          {comic.safe_title}
        </h1>
        <img src={comic.img} alt={comic.alt} />
      </div>
    );
  }
}

export default ComicBox;
