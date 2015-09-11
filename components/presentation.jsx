import React from 'react';
import Agenda from './agenda';
import Slide from './slide';
import {agendaItems, slides} from '../presentationSchema';

let Presentation = React.createClass({
    getInitialState () {
        return {
            currentSlideId: 1
        };
    },

    _handleItemClick (slideId) {
        this.setState(() => {
            return {
                currentSlideId: slideId
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
                    slideData={slides.get(this.state.currentSlideId)}
                />
            </div>
        );
    }

});

export default Presentation;
