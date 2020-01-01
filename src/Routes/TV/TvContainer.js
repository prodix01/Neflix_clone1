import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";

import {tvApi} from "../../api";

class TvContainer extends Component {

    //상태값
    state = {
        popular: null,
        topRate: null,
        airingToday: null,
        error: null,
        loading: true
    };

    //라이프사이클
    async componentDidMount() {
        try {
            const {
                data: { results: airingToday}
            } = await tvApi.airingToday();

            const {
                data: { results: topRate}
            } = await  tvApi.topRate();

            const {
                data: { results: popular}
            } = await tvApi.popular();

            this.setState({
                airingToday,
                topRate,
                popular
                // popular: popular
            });
        }
        catch {
            this.setState({
                error: "Can't find TV show"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {popular, topRate, airingToday, error, loading} = this.state;
        console.log(popular);

        return (
            <TvPresenter
                loading={loading}
                popular={popular}
                topRate={topRate}
                airingToday={airingToday}
                error={error}
            />
        );
    }
}

export default TvContainer;