import React, { Component } from "react";
import bs from "./Button.module.css";
// import PropTypes from "prop-types";

export default class Button extends Component {
  state = {
    page: this.props.page,
    active: false,
  };
  changePage = (e) => {
    e.preventDefault();
    const { page } = this.props;
    console.log(page);
    this.setState((prevState) => {
      console.log(prevState);
      return {
        page: +prevState.page + 1,
      };
    });
  };
  addNewPage = (e) => {
    e.preventDefault();
    const { getNewPage } = this.props;
    const { page } = this.state;
    console.log(page);

    getNewPage(page);
  };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.onSubmit({ id: uuidv4(), ...this.state });
  //     this.reset();
  //   };
  render() {
    return (
      <button
        className={bs.Button}
        type="button"
        data-action="load-more"
        // disabled={true}
        onClick={(e) => {
          this.changePage(e);
          this.addNewPage(e);
        }}
      >
        Show more
      </button>
    );
  }
}
