import React from 'react';
import Agenda from './agenda';
import Slide from './slide';
import Switcher from './switcher';

let PropTypes = React.PropTypes;

let Presentation = React.createClass({

    propTypes: {
        agendaItems: PropTypes.array.isRequired,
        slides: PropTypes.instanceOf(Map).isRequired
    },

    getInitialState () {
        return {
            currentSlideNumber: 1
        };
    },

    _handleSlideChange (newSlideNumber) {
        this.setState(() => {
            return {
                currentSlideNumber: newSlideNumber
            };
        });
    },

    render () {
        return (
            <div className="Presentation">
                <Agenda
                    handleItemClick={this._handleSlideChange}
                    items={this.props.agendaItems}
                />

                <Switcher
                    availableSlidesNumbers={Array.from(this.props.slides.keys())}
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleSlideChange={this._handleSlideChange}
                />

                <Slide
                    slideData={this.props.slides.get(this.state.currentSlideNumber)}
                />
            </div>
        );
    }

});

export default Presentation;
