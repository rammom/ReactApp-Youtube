import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        return this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={this.onInputChange}
                />
                Value of the input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar;