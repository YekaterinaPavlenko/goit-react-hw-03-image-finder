import React, { Component } from "react";
import sbs from "./Searchbar.module.css";
// import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    // const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.query);
    this.props.onSubmit({ ...this.state });
    // this.reset();
  };
  render() {
    const { query } = this.state;
    return (
      <header className={sbs.Searchbar}>
        <form className={sbs.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={sbs.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            name="query"
            value={query}
          />
          <button type="submit" className={sbs.button}>
            <span className={sbs.button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
