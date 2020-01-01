import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

import {moviesApi} from "../../api";

class HomeContainer extends Component {

    //상태값
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    //라이프사이클
    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();

            const {
                data: { results: upComing }
            } = await moviesApi.upComing();

            const {
                data: { results: popular }
            } = await moviesApi.popular();

            this.setState({
                nowPlaying,
                upComing,
                popular
            });
        }
        catch {
            this.setState({
                error: "Can't find Movies information"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;

        console.log(nowPlaying);

        return (
            <HomePresenter
                loading={loading}
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
            />
        );
    }
}

HomeContainer.propTypes = {};

export default HomeContainer;