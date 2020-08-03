import React, { Component } from "react";
import "./Sidebar.css";
import quote from "../images/quote.svg";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Sidebar">
        <img className="Logo" src={quote} alt="Logo-Quote" />
        <h1 className="Sidebar-title">Famous Quotes</h1>
        <span className="Sidebar-subtitle">
          Based on{" "}
          <a href="https://github.com/lukePeavey/quotable.git">Quotable Api</a>
        </span>
      </div>
    );
  }
}

export default Sidebar;
