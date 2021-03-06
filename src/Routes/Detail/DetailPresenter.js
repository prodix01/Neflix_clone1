import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Title = styled.h3`
    font-size: 32px;
    
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
    
`;

const Item = styled.span`
  
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Divider = styled.span`
    margin: 0px 10px;
`;

const Overview = styled.p`
    font-size: 13px;
    opacity: 0.7;
    line-height: 1.7;
    width: 80%;
    padding-top: 20px;
`;

const DetailPresenter = ({result, loading, error}) => (
    <>
        <Helmet>
            <title>Loading | Netflix</title>
        </Helmet>
        {loading ? (
            <Loader/>
        ) : (
            <Container>
                <Helmet>
                    <title>{result.original_title ? result.original_title : result.original_name}{" "} | Netflix</title>
                </Helmet>
                <BackDrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                <Content>
                    <Cover bgImage={
                        result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("../../Components/empty.png")
                        }
                    />
                    <Data>
                        <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                        <ItemContainer>
                            <Item>{result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)}
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.genres
                                && result.genres.map((genre, index) =>
                                index === result.genres.lengh - 1
                                    ? genre.name
                                    : `${genre.name} / `
                                )}
                            </Item>
                            <Overview>{result.overview}</Overview>
                        </ItemContainer>
                    </Data>
                </Content>
            </Container>
        )}
    </>
);

DetailPresenter.propTypes = {
    result: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;