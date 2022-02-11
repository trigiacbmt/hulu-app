const API_KEY = "f298792b7aa62ed73f1c0e219bfc90b5";
console.log(API_KEY)

export default {
    fecthTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fecthTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fecthActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fecthComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fecthHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fecthRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fecthMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fecthScifi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fecthWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fecthAnomation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fecthTV: {
        title: "TV",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}