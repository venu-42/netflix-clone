const API_KEY = "6d247d02c3241431b17a4f404530ef6e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&language=en-US&networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchDiscover: `/discover/movie?api_key=${API_KEY}`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
