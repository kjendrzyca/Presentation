import React from 'react';
import Agenda from './agenda';
import Slide from './slide';
import Switcher from './switcher';
import * as presentationData from '../presentationSchema';

let Presentation = React.createClass({

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
            <div className="Presentation" style={presentationData.cssOptions}>
                <Agenda
                    handleItemClick={this._handleSlideChange}
                    isAgendaOpen={this.state.isAgendaOpen}
                    items={presentationData.agendaItems}
                />

                <Slide
                    slideData={presentationData.slides.get(this.state.currentSlideNumber)}
                />

                <Switcher
                    availableSlidesNumbers={Array.from(presentationData.slides.keys())}
                    currentSlideNumber={this.state.currentSlideNumber}
                    handleSlideChange={this._handleSlideChange}
                    toggleAgenda={this._toggleAgenda}
                />
            </div>
        );
    }

});

export default Presentation;
