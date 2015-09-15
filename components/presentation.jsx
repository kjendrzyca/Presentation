import React from 'react';
import Agenda from './agenda';
import Slide from './slide';
import Switcher from './switcher';

let PropTypes = React.PropTypes;

let Presentation = React.createClass({

    propTypes: {
        agendaItems: PropTypes.array.isRequired,
        cssOptions: PropTypes.object.isRequired,
        slides: PropTypes.instanceOf(Map).isRequired
    },

    getInitialState () {
        return {
            currentSlideNumber: 1,
            isAgendaOpen: false
        };
    },

    _handleSlideChange (newSlideNumber) {
        this.setState(() => {
            return {
                currentSlideNumber: newSlideNumber
            };
        });
    },

    _toggleAgenda () {
        this.setState((oldState) => {
            return {
                isAgendaOpen: !oldState.isAgendaOpen
            };
        });
    },

    render () {
        return (
            <div className="Presentation" style={this.props.cssOptions}>
                <Agenda
                    handleItemClick={this._handleSlideChange}
                    isAgendaOpen={this.state.isAgendaOpen}
                    items={this.props.agendaItems}
                />

                <Slide
                    slideData={this.props.slides.get(this.state.currentSlideNumber)}
                />

                <Switcher
                    availableSlidesNumbers={Array.from(this.props.slides.keys())}
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleSlideChange={this._handleSlideChange}
                    toggleAgenda={this._toggleAgenda}
                />
            </div>
        );
    }

});

export default Presentation;
