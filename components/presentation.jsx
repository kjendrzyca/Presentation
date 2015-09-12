import React from 'react';
import Agenda from './agenda';
import Slide from './slide';

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
                    items={this.props.agendaItems}
                />

                <Slide
                    slideData={this.props.slides.get(this.state.currentSlideNumber)}
                />
            </div>
        );
    }

});

export default Presentation;
