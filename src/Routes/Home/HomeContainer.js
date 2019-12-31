import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {

    //상태값
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };
    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;

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