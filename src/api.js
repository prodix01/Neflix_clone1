import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key : "4e1aa96a568add36e8e3cbc4274fd907",
        language : "ko-KR"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params : {
                append_to_response : "videos"
            }
        }),
    search: keyword =>
        api.get("search/movie", {
            params : {
                query : encodeURIComponent(keyword)
            }
        })
};

export const tvApi = {
    popular: () => api.get("tv/popular"),
    topRate: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today")
    tvDetail: id =>
        api.get(`tv/${id}`, {
            params : {
                append_to_response : "videos"
            }
        }),
    search: keyword =>
        api.get("search/tv", {
            params : {
                query: encodeURIComponent(keyword)
            }
        })

};