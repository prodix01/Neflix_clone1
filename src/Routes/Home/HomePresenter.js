import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const HomePresenter = ({nowPlaying, popular, upComing, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <h1>1111</h1>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;