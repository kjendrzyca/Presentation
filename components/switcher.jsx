import React from 'react';
import './switcher.css';

let PropTypes = React.PropTypes;

let Switcher = React.createClass({

    propTypes: {
        currentSlideNumber: PropTypes.number.isRequired,
        handleSlideChange: PropTypes.func.isRequired,
        slidesCount: PropTypes.number.isRequired,
        toggleAgenda: PropTypes.func.isRequired
    },

    _prevSlide () {
        this._setNewSlideNumber(this.props.currentSlideNumber - 1);
    },

    _nextSlide () {
        this._setNewSlideNumber(this.props.currentSlideNumber + 1);
    },

    _toggleAgenda () {
        this.props.toggleAgenda();
    },

    _setNewSlideNumber (newSlideNumber) {
        if (newSlideNumber >= 0 && newSlideNumber < this.props.slidesCount) {
            this.props.handleSlideChange(newSlideNumber);
            return;
        }

        alert('no such slide');
    },

    render () {
        return (
            <div className="Switcher">
                <button onClick={this._prevSlide}> prev </button>
                <button onClick={this._toggleAgenda}> toggle </button>
                <button onClick={this._nextSlide}> next </button>
            </div>
        );
    }

});

export default Switcher;
