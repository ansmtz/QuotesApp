import React, { Component } from "react";
import "./Quote.css";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
class Quote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Quote">
        <div className="Quote-vote">
          <button className="Like">+</button>
          <span className="Like-quantity">0</span>
          <button className="Dislike">-</button>
        </div>
        <div className="Quote-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum
          tempore nisi voluptas? Laboriosam, enim molestiae? Debitis deserunt
          quae ut magni facilis aperiam consequatur, libero veritatis excepturi
          repudiandae? Repudiandae, magni.
          <span className="Quote-author">Chiahcis</span>
        </div>
      </div>
    );
  }
}

export default Quote;
