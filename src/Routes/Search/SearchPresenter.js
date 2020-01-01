import React from "react";
import PropTypes from "prop-types";

const SearchPresenter = ({
    movieResults,
    tvResults,
    error,
    loading,
    searchTerm,
    handleSubmit
}) => null;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired
}

export default SearchPresenter;