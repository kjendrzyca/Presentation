import React from 'react';
import classNames from 'classnames';
import './agenda.css';

let PropTypes = React.PropTypes;

let Agenda = React.createClass({

    propTypes: {
        currentSlideNumber: PropTypes.number.isRequired,
        handleItemClick: PropTypes.func.isRequired,
        isAgendaOpen: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired
    },

    _itemClicked (slideNumber) {
        this.props.handleItemClick(slideNumber);
    },

    _getItems () {
        return this.props.items.map((item) => {
            const agendaItemClassNames = classNames({
                active: this._isActive(item)
            });
            return (
                <a
                    className={agendaItemClassNames}
                    href="#" key={item.slideNumber}
                    onClick={this._itemClicked.bind(null, item.slideNumber)}
                >
                    {item.title}
                </a>
            );
        });
    },

    _isActive (currentItem) {
        const itemIndex = this.props.items.indexOf(currentItem);

        if (itemIndex === -1) {
            return false;
        }

        if (itemIndex === this.props.items.length - 1) {
            return this.props.currentSlideNumber >= currentItem.slideNumber;
        }

        const nextItem = this.props.items[itemIndex + 1];

        return this.props.currentSlideNumber >= currentItem.slideNumber && this.props.currentSlideNumber < nextItem.slideNumber;
    },

    _getElementStyle () {
        return {
            marginLeft: this.props.isAgendaOpen ? 0 : '-20%'
        };
    },

    render () {
        return (
            <div className={classNames('Agenda')} style={this._getElementStyle()}>
                {this._getItems()}
            </div>
        );
    }

});

export default Agenda;
