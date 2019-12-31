import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";

class TvContainer extends Component {

    //상태값
    state = {
        popular: null,
        topRate: null,
        airingToday: null,
        error: null,
        loading: true

    };
    render() {

        const {popular, topRate, airingToday, error, loading} = this.state;

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