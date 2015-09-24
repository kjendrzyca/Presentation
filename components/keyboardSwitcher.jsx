import React from 'react';

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACE = 32;
const ENTER = 13;
const HOME = 36;
const END = 35;

let PropTypes = React.PropTypes;

let KeyboardSwitcher = React.createClass({

    propTypes: {
        currentSlideNumber: PropTypes.number.isRequired,
        handleSlideChange: PropTypes.func.isRequired,
        slidesCount: PropTypes.number.isRequired,
        toggleAgenda: PropTypes.func.isRequired
    },

    componentDidMount () {
        window.addEventListener('keyup', this._listenForKeys);
    },

    componentWillUnmount () {
        window.removeEventListener('keyup', this._listenForKeys);
    },

    _listenForKeys (event) {
        switch (event.keyCode) {
            case LEFT_ARROW:
                this._prev();
                break;
            case RIGHT_ARROW:
                this._next();
                break;
            case SPACE:
            case ENTER:
                this.props.toggleAgenda();
                break;
            case HOME:
                this._first();
                break;
            case END:
                this._last();
                break;
        }
    },

    _prev () {
        this._changeSlideTo(this.props.currentSlideNumber - 1);
    },

    _next () {
        this._changeSlideTo(this.props.currentSlideNumber + 1);
    },

    _first () {
        this._changeSlideTo(0);
    },

    _last () {
        this._changeSlideTo(this.props.slidesCount - 1);
    },

    _changeSlideTo (slideNumber) {
        let slideToGoTo = slideNumber;
        switch (slideNumber) {
            case -1:
                slideToGoTo = 0;
                break;
            case this.props.slidesCount:
                slideToGoTo = this.props.slidesCount - 1;
                break;
        }

        this.props.handleSlideChange(slideToGoTo);
    },

    render () {
        return <div></div>;
    }
});

export default KeyboardSwitcher;
