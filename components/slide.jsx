import React from 'react';
let PropTypes = React.PropTypes;

let Slide = React.createClass({

    propTypes: {
        slideData: PropTypes.object.isRequired
    },

    render () {
        return (
            <div className="Slide">
                <h1>{this.props.slideData.title}</h1>
                <div>{this.props.slideData.text}</div>
            </div>
        );
    }

});

export default Slide;
