import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    imageKeyWord: '',
  };

  handleChange = e => {
    this.setState({
      imageKeyWord: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.imageKeyWord);
    this.setState({
      imageKeyWord: '',
    });
  };

  render() {
    const { imageKeyWord } = this.state;
    return (
      <form className={s.Searchbar} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleChange}
          value={imageKeyWord}
          className={s.SearchForm}
        />
        <button>Поиск</button>
      </form>
    );
  }
}
