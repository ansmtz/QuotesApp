import React, { Component } from "react";
import "./Quote.css";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import { v4 as uuidv4 } from "uuid";
class Quote extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    let delta = e.target.id === "like" ? 1 : -1;
    this.props.changeScore(this.props.id, delta);
  };

  filterHandler = (e) => {
    this.props.filterQuotes(e.target.innerText);
  };

  render() {
    const quantityStyles = {
      color: this.props.score >= 0 ? "#66b032" : "#b0323c",
    };
    return (
      <div className="Quote">
        <div className="Quote-vote">
          <button onClick={this.handleClick} className="Like" id="like">
            👍
          </button>
          <span style={quantityStyles} className="Like-quantity">
            {this.props.score}
          </span>
          <button onClick={this.handleClick} className="Dislike" id="dislike">
            👎
          </button>
        </div>
        <div className="Quote-text">
          {this.props.content}
          <span className="Quote-author">{this.props.author}</span>
          <div className="Quote-tags">
            {this.props.tags.map((t) => (
              <a
                href="#"
                key={uuidv4()}
                className="Quote-tag"
                onClick={this.filterHandler}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
