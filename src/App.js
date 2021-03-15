import React, { Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import fetchImages from './services/pixabayApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    fetchLength: null,
    isLoading: false,
  };
  getQueryByForm = ({ query }) => {
    console.log(query);
    this.setState({ query: query, page: 1, gallery: [] });
  };
  setNewPage = e => {
    e.preventDefault();
    const { page } = this.state;
    console.log(page);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // componentDidMount() {
  //   console.log('я родился');
  //   // console.log(query);
  //   const { query } = this.state;
  //   if (query) {
  //     this.fetchImages(query);
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('я обновился');
    // console.log(prevState);
    // console.log(this.state);
    const { query, page } = this.state;
    if (query !== prevState.query) {
      this.fetchImagesByQuery(query);
    } else if (query === prevState.query && page !== prevState.page) {
      this.fetchImagesByQuery(query);
    }
  }

  fetchImagesByQuery = (prevProps, prevState) => {
    const { query, page } = this.state;
    // console.log(query);
    // console.log(page);
    // this.setState({ isLoading: true });

    // console.log(query);
    // fetchImages(query, page)
    //   .then(result => {
    //     console.log(query);
    //     console.log(result);
    //     this.setState({ gallery: [...result], fetchLength: result.length });
    //   })
    //   .catch(error => console.log(error))
    //   .finally(() => {
    //  this.setState({ isLoading: false });
    //     window.scrollTo({
    //       top: document.documentElement.scrollHeight,
    //       behavior: 'smooth',
    //     });
    //   });
    //  if (query === prevState.query && page !== prevState.page) {
    console.log(query);
    console.log(page);
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then(result => {
        console.log(query);
        console.log(result);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...result],
          fetchLength: result.length,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    // }
  };
  render() {
    const { gallery, fetchLength, isLoading } = this.state;
    console.log(fetchLength);
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className="App">
        <h1>Search image</h1>
        <Searchbar onSubmit={this.getQueryByForm} />
        <ImageGallery gallery={gallery} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {fetchLength === 12 && !isLoading && (
          <Button getNewPage={this.setNewPage} />
        )}
      </div>
    );
  }
}

export default App;
