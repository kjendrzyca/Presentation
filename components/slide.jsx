import React from 'react';
import './slide.css';

let PropTypes = React.PropTypes;

let Slide = React.createClass({

    propTypes: {
        slideData: PropTypes.object.isRequired
    },

    _showImage () {
        let image = this.props.slideData.image;
        if (image) {
            return <img src={image} />;
        }
    },

    render () {
        return (
            <div className="Slide">
                <h1>{this.props.slideData.title}</h1>
                <div className="slide-content">{this.props.slideData.text}</div>
                <div className="slide-image">{this._showImage()}</div>
            </div>
        );
    }

});

export default Slide;
