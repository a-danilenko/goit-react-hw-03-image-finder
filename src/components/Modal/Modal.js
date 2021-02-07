import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current)
      return;
    this.props.onClose();
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div
        className={s.Overlay}
        ref={this.backdropRef}
        role="presentation"
        onClick={this.handleBackdropClick}
      >
        <div className={s.Modal}>
          <img src={largeImageURL} alt="" />
          <button className={s.closeButton} onClick={this.props.onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}
