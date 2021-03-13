import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import fetchImages from "./services/pixabayApi";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    query: "",
    page: 1,
    gallery: [],
  };
  getQueryByForm = ({ query }) => {
    console.log(query);
    this.setState({ query });
  };
  setNewPage = (page) => {
    console.log(page);
    this.setState({ page: page });
  };
  // formSubmitHandler = (data) => {
  //   const { contacts } = this.state;
  //   let existName = contacts.find(
  //     (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
  //   );
  //   let existNumber = contacts.find(
  //     (contact) => contact.number.toLowerCase() === data.number.toLowerCase()
  //   );
  //   let existContact = (existName && "name") || (existNumber && "number");
  //   // console.log(existContact);

  //   existName || existNumber
  //     ? alert(`The ${existContact} is already in contacts.`)
  //     : this.setState((prevState) => ({
  //         contacts: [data, ...prevState.contacts],
  //       }));
  // };

  // addFilterValue = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   // console.log(filter);
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // onDeleteContact = (id) => {
  //   const { contacts } = this.state;
  //   this.setState({
  //     contacts: contacts.filter((contact) => contact.id !== id),
  //   });
  // };
  componentDidMount() {
    console.log("я родился");
    const { query, page } = this.state;
    // console.log(query);
    fetchImages(query, page).then((result) => {
      // console.log(result);
      this.setState({ gallery: [...result] });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("я обновился");
    // console.log(prevState);
    // console.log(this.state);
    const { query, page } = this.state;
    if (query !== prevState.query) {
      console.log(query);
      fetchImages(query, page).then((result) => {
        console.log(query);
        console.log(result);
        this.setState({ gallery: [...result] });
      });
    } else if (query === prevState.query && page !== prevState.page) {
      console.log(query);
      console.log(page);
      fetchImages(query, page).then((result) => {
        console.log(query);
        console.log(result);
        this.setState({ gallery: [...prevState.gallery, ...result] });
      });
    }
  }

  render() {
    const { gallery, page } = this.state;
    console.log(page);
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1>Search image</h1>
        <Searchbar onSubmit={this.getQueryByForm} />

        <ImageGallery gallery={gallery} />
        <Button page={page} getNewPage={this.setNewPage} />
      </div>
    );
  }
}

export default App;
