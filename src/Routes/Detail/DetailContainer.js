import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";
import {moviesApi, tvApi} from "../../api";

class DetailContainer extends Component {

    //상태값
    constructor(props) {
        super(props);
        const {
            location: {pathname}
        } = props;

        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    //라이프사이클
    async componentDidMount() {
        const {
            match: {
                params: {id}
            },
            history: {push}
        } = this.props;

        const {isMovie} = this.state;

        const parsedId = parseInt(id);

        if (isNaN(parsedId)) {
            return push("/");
        }

        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await moviesApi.movieDetail(parsedId))
            }
            else {
                ({ data: result } = await tvApi.tvDetail(parsedId))
            }

            this.setState({
                result
            });
        }
        catch {
            this.setState({
                error: "Can't find Anything."
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
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