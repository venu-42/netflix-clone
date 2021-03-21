import React, { useEffect ,useState} from 'react'
import './Row.css'
import axios from './axios'


function Row({title,fetchURL,isLarge}) {
    const [movies,setMovies]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            console.log(fetchURL)
            const res=await axios.get(fetchURL);
            setMovies(res.data.results);
            console.log(res)
            return res;
        }
        fetchData();
    },[fetchURL])
    return (
        <div className='category__row'>
            <h3 className='category__row__title'>{title}</h3>
            <div className='category__row__cards'>
                {
                    movies&&movies.map((movie)=>(
                        ((isLarge&&movie.poster_path)||(!isLarge&&movie.backdrop_path))&&
                        <Card imgPath={'https://image.tmdb.org/t/p/w500'+`${isLarge?movie.poster_path:movie.backdrop_path}`}  title={movie.title||movie.name} />
                    ))
                }
            </div>
        </div>
    )
}

const Card =({imgPath,title})=>{
    return (
    <div className='category__row__card'>
        <img style={{width:'100%'}} src={imgPath} alt={title} />
        <p>{title}</p>
    </div>
    )
}

export default Row
