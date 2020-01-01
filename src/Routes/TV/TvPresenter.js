import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const TvPresenter = ({popular, topRate, airingToday, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <h1>2222</h1>
    );

TvPresenter.propTypes = {
    popular: PropTypes.array,
    topRate: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TvPresenter;