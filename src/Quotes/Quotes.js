import React, { Component } from "react";
import "./Quotes.css";
import Quote from "../Quote/Quote";
class Quotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Quotes">
        <Quote />
        <Quote />
        {/* <div className="test">
          <div className="circle"></div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            ipsum tempore nisi voluptas? Laboriosam, enim molestiae? Debitis
            deserunt quae ut magni facilis aperiam consequatur, libero veritatis
            excepturi repudiandae? Repudiandae, magni.
          </div>
        </div> */}
      </div>
    );
  }
}

export default Quotes;
