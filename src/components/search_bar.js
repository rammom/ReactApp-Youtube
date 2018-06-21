import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            onSearchTermChange: props.onSearchTermChange
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
        return this.state.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;