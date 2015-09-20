import React from 'react';
import './agenda.css';

let PropTypes = React.PropTypes;

let Agenda = React.createClass({

    propTypes: {
        handleItemClick: PropTypes.func.isRequired,
        isAgendaOpen: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired
    },

    _itemClicked (slideNumber) {
        this.props.handleItemClick(slideNumber);
    },

    _getItems () {
        return this.props.items.map((item) => {
            return (
                <a href="#" key={item.slideNumber} onClick={this._itemClicked.bind(null, item.slideNumber)}>{item.title}</a>
            );
        });
    },

    _getElementStyle () {
        if (this.props.isAgendaOpen) {
            return {marginLeft: 0};
        }

        return {marginLeft: '-20%'};
    },

    render () {
        return (
            <div className="Agenda" style={this._getElementStyle()}>
                {this._getItems()}
            </div>
        );
    }

});

export default Agenda;
