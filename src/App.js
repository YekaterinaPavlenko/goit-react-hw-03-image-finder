import React, { Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import fetchImages from './services/pixabayApi';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Notifications from './components/Notifications/Notifications';

class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    fetchLength: null,
    isLoading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('я обновился');

    const { query, page } = this.state;
    if (query !== prevState.query) {
      this.fetchImagesByQuery(query);
    } else if (query === prevState.query && page !== prevState.page) {
      this.fetchImagesByQuery(query);
    }
  }

  getQueryByForm = ({ query }) => {
    this.setState({ query: query, page: 1, gallery: [] });
  };

  setNewPage = e => {
    e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImagesByQuery = (prevProps, prevState) => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then(result => {
        // console.log(result);
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...result],
          fetchLength: result.length,
        }));
      })
      .catch(error => {
        this.setState({ error: true, gallery: [] });
      })
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
    const { gallery, fetchLength, isLoading, query, error } = this.state;
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

        <Notifications
          fetchLength={fetchLength}
          galleryLength={gallery.length}
          searchQuery={query}
          error={error}
        />
      </div>
    );
  }
}

export default App;
