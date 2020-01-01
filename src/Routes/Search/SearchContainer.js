import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {

    //상태값
    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: ""
    };

    handleSubmit = () => {

    }

    render() {

        const {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm
        } = this.state;
        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
            />
        );
    }
}

export default SearchContainer;