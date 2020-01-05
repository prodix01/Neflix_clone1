import React, {Component} from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";
import styled from "styled-components";
import Message from "../../Components/Message";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 10px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
    
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;


class SearchPresenter extends Component{

    render() {

        let {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm,
            handleSubmit,
            updateTerm
        } = this.props;

        return (

            <Container>
                <Helmet>
                    <title>Search | Netflix</title>
                </Helmet>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Search Movies or Tv Shows..."
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </Form>

                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <>
                            {movieResults && movieResults.length > 0 && (
                                <Section title="영화검색 결과">
                                    {movieResults.map(movie =>
                                        <Poster
                                            id={movie.id}
                                            title={movie.title}
                                            rating={movie.vote_average}
                                            year={movie.release_date}
                                            imageUrl={movie.poster_path}
                                        />
                                    )}
                                </Section>
                            )}

                            {tvResults && tvResults.length > 0 && (
                                <Section title="TV 프로그램 검색 결과">
                                    {tvResults.map(tv =>
                                        <Poster
                                            id={tv.id}
                                            title={tv.name}
                                            rating={tv.vote_average}
                                            year={tv.first_air_date}
                                            imageUrl={tv.poster_path}
                                        />
                                    )}
                                </Section>
                            )}
                        </>
                    )
                }

                {error && <Message color="#e74c3c" text={error}/>}
                {tvResults && movieResults
                && tvResults.length === 0
                && movieResults.length === 0
                && <Message color="#95a5a6" text="Noting Found."/>}

            </Container>
        );
    }
}


SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;