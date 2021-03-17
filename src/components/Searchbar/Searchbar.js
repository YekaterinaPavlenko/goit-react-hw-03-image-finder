import React, { Component } from 'react';
import sbs from './Searchbar.module.css';
import PropTypes from 'prop-types';
// import Notifications from '../Notifications/Notifications';

class Searchbar extends Component {
  state = {
    query: '',
    // noQuery: '',
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.query);
    const { query } = this.state;
    this.props.onSubmit({ query });
    this.setState({ query: '' });
    //  query !== '' &&
    // this.reset();
  };
  render() {
    const { query } = this.state;
    // console.log(query);
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
        {/* <Notifications searchQuery={query} /> */}
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
