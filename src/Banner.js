import React, { useEffect ,useState} from 'react';
import axios from './axios';
import requests from './requests'
import './Banner.css';
function Banner() {
    const [movie,setMovie]= useState({});

    useEffect(()=>{
        async function getPopularMovies(){
            const request= await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random()*(request.data.results.length-1))]);
            // console.log(request);
            return request;
        }
        getPopularMovies();
            
    },[])


    return (
        <header className='banner' style={{backgroundImage:`linear-gradient(180deg,transparent 80%,#000),url(${movie?('https://image.tmdb.org/t/p/original'+movie.backdrop_path):'https://cdn131.picsart.com/271354785002201.jpg'})`}}>
            <div className="banner__content">
                <h1 className='banner__title'>{movie?(movie.title||movie.name||movie.original_name):' '}</h1>
                <div className='banner__btns'>
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My List</button>
                </div>
                <p className='banner__desc'>{movie?movie.overview:' '}</p>
            </div>
        </header>
    )
}

export default Banner
