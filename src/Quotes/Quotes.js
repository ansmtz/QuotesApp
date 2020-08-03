import React, { Component } from "react";
import "./Quotes.css";
import Quote from "../Quote/Quote";
import axios from "axios";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: JSON.parse(window.localStorage.getItem("quotes") || "[]"),
      isLoading: false,
    };
  }

  componentDidMount = () => {
    if (!this.state.quotes.length) {
      this.getQuotes();
    }
  };

  getQuotes = async () => {
    try {
      const newQuotes = [];
      while (newQuotes.length < 10) {
        let res = await axios.get("http://staging.quotable.io/random");
        const stateQuotesSet = new Set(this.state.quotes.map((q) => q.content));
        if (!stateQuotesSet.has(res.data.content)) {
          // если текст цитаты уже есть в стейт, ничего не пушим в массив
          newQuotes.push({
            content: res.data.content,
            tags: res.data.tags,
            author: res.data.author,
            id: res.data._id,
            score: 0,
          });
        } else {
          console.log(`Prevent duplication: ${res.data.content}`);
        }
        // текущий state quotes оставляем
        // getQuotes вызывается при пустом хранилище или по нажатии на кнопку
        // таким образом мы всегда получим либо 10 цитат,
        // либо +10 к существующим
        this.setState(
          (st) => ({ quotes: [...st.quotes, ...newQuotes], isLoading: false }),
          () =>
            window.localStorage.setItem(
              "quotes",
              JSON.stringify(this.state.quotes)
            )
        );
      }
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  changeScore = (quoteId, delta) => {
    const newState = this.state.quotes.map((quote) => {
      if (quote.id === quoteId) {
        return { ...quote, score: quote.score + delta };
      } else {
        return quote;
      }
    });
    this.setState({
      quotes: newState,
    });
    window.localStorage.setItem("quotes", JSON.stringify(newState));
  };

  filterQuotes = (tag) => {
    this.setState((st) => ({
      quotes: st.quotes.filter((q) => q.tags.includes(tag)),
    }));
  };

  addHandler = () => {
    this.setState({ isLoading: true });
    this.getQuotes();
  };

  render() {
    const quotes = this.state.quotes.map((q) => (
      <Quote
        key={q.id}
        id={q.id}
        content={q.content}
        author={q.author}
        tags={q.tags}
        score={q.score}
        changeScore={this.changeScore}
        filterQuotes={this.filterQuotes}
      />
    ));
    return (
      <div className="Quotes">
        {quotes.sort((a, b) => b.props.score - a.props.score)}
        <button disabled={this.state.isLoading} onClick={this.addHandler}>
          {this.state.isLoading ? "Fetching new quotes" : "Show more"}
        </button>
      </div>
    );
  }
}

export default Quotes;
