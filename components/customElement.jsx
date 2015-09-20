import React from 'react';

let CustomElement = React.createClass({

    getInitialState () {
        return {
            elements: [
                'Batman',
                'Robin',
                'Catwomen',
                'Two Face',
                'Joker'
            ],
            searchtext: ''
        };
    },

    _getElements () {
        let elements = this.state.elements;

        return elements
            .filter(element => element.indexOf(this.state.searchtext) > -1)
            .map(element => <div key={element}>{element}</div>);
    },

    _searchTextChanged () {
        this.setState(
            {
                searchtext: this.refs.searchbox.getDOMNode().value
            }
        );
    },

    render () {
        return (
            <div className="CustomElement">
                <input
                    name="searchbox"
                    onChange={this._searchTextChanged}
                    ref="searchbox"
                    type="text"
                />
                <div>
                    {this._getElements()}
                </div>
            </div>
        );
    }
});

export default CustomElement;
