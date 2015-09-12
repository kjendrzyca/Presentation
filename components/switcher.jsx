import React from 'react';

let PropTypes = React.PropTypes;

let Switcher = React.createClass({

    propTypes: {
        availableSlidesNumbers: PropTypes.array.isRequired,
        currentSlideNumber: PropTypes.number.isRequired,
        handleSlideChange: PropTypes.func.isRequired
    },

    _prevSlide () {
        this._setNewSlideNumber(this.props.currentSlideNumber - 1);
    },

    _nextSlide () {
        this._setNewSlideNumber(this.props.currentSlideNumber + 1);
    },

    _setNewSlideNumber (newSlideNumber) {
        if (this.props.availableSlidesNumbers.indexOf(newSlideNumber) > -1) {
            this.props.handleSlideChange(newSlideNumber);

            return {
                currentSlideNumber: newSlideNumber
            };
        }

        alert('no such slide');
    },

    render () {
        return (
            <div className="Switcher">
                <button onClick={this._prevSlide}> prev </button>
                <button onClick={this._nextSlide}> next </button>
            </div>
        );
    }

});

export default Switcher;
