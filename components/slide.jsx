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
            return (<div className="slide-image">
                        <img src={image} />;
                    </div>);
        }
    },

    _getCustomSlideData () {
        let customHtml = this.props.slideData.customHtml;
        return customHtml ? customHtml : null;
    },

    render () {
        return (
            <div className="Slide">
                <h1>{this.props.slideData.title}</h1>
                <div className="slide-content">
                    {this.props.slideData.text}
                    {this._showImage()}
                {this._getCustomSlideData()}
                </div>
            </div>
        );
    }

});

export default Slide;
