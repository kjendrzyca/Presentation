import React from 'react';
import Agenda from './agenda';
import Slide from './slide';
import {agendaItems, slides} from '../presentationSchema';

let Presentation = React.createClass({
    getInitialState () {
        return {
            currentSlideNumber: 1
        };
    },

    _handleItemClick (slideNumber) {
        this.setState(() => {
            return {
                currentSlideNumber: slideNumber
            };
        });
    },

    render () {
        return (
            <div className="Presentation">
                <Agenda
                    handleItemClick={this._handleItemClick}
                    items={agendaItems}
                />

                <Slide
                    slideData={slides.get(this.state.currentSlideNumber)}
                />
            </div>
        );
    }

});

export default Presentation;
