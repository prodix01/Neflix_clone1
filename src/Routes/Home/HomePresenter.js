import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import styled from "styled-components";
import Message from "../../Components/Message";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({nowPlaying, popular, upComing, loading, error}) => (
    <>
        <Helmet>
            <title>Movies | Netfilx_Clone</title>
        </Helmet>
        {loading ? (
            <Loader/>
        ) : (

            <Container>
                <Helmet>
                    <title>Movies | Netfilx</title>
                </Helmet>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="최신영화">
                        {nowPlaying.map(movie =>
                            <Poster
                                id={movie.id}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                            />
                        )}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title="개봉예정 영화">
                        {upComing.map(movie =>
                            <Poster
                                id={movie.id}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                            />
                        )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title="인기영화">
                        {popular.map(movie =>
                            <Poster
                                id={movie.id}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                imageUrl={movie.poster_path}
                                isMovie={true}
                            />
                        )}
                    </Section>
                )}

                {error && <Message color="#e74c3c" text={error}/>}
            </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default HomePresenter;