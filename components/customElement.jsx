import React from 'react';

let CustomElement = React.createClass({

    getInitialState () {
        return {
            elements: [
                'Batman',
                'Robin',
                'Catwomen'
            ],
            searchtext: ''
        };
    },

    _getElements () {
        let elements = this.state.elements;

        let filterdElements = elements.filter((ele) => {
            return ele.indexOf(this.state.searchtext)  > -1;
        });

        return filterdElements.map((ele) => {
            return <div>{ele}</div>;
        });
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
