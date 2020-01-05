import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {

    //상태값
    constructor(props) {
        super(props);
        const {
            location: pathname
        } = props;

        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    render() {

        const {
            result,
            error,
            loading
        } = this.state;

        return (
            <DetailPresenter
                loading={loading}
                error={error}
                result={result}
            />
        );
    }
}

export default DetailContainer;