import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";


const DetailPresenter = ({result, loading, error}) => (
    loading ? (
        <Loader/>
    ) : (
        <div>
            <h1>Detail</h1>
        </div>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;