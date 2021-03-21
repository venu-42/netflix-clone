import React from 'react'
import './HomeScreen.css'

import Nav from './Nav.js'
import Banner from './Banner.js'
import Row from './Row.js'
import requests from './requests'

function HomePage() {
    return (
        <div>
            <Nav />
            <Banner />
            <Row title="Netflix originals" fetchURL={requests.fetchNetflix} isLarge />
            <Row title="Discover" fetchURL={requests.fetchDiscover} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchAction} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedy} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorror} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomance} />
        </div>
    )
}

export default HomePage
