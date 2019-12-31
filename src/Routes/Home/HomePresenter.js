import React from "react";
import PropTypes from "prop-types";

const HomePresenter = ({nowPlaying, popular, upComing, loading, error}) =>
    <h1>{nowPlaying}</h1>;

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;