import React from 'react';
let PropTypes = React.PropTypes;

let Agenda = React.createClass({

    propTypes: {
        handleItemClick: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired
    },

    _itemClicked (slideNumber) {
        this.props.handleItemClick(slideNumber);
    },

    _getItems () {
        return this.props.items.map((item) => {
            return (
                <div>
                    <a href="#" onClick={this._itemClicked.bind(null, item.slideNumber)}>{item.title}</a>
                </div>
            );
        });
    },

    render () {
        return (
            <div className="Agenda">
                {this._getItems()}
            </div>
        );
    }

});

export default Agenda;
