import React, { useEffect, useState } from 'react'
import './Getvod.css'

export default (props) => {

    // construct m3u link getting username and password from father
    function m3u(props) {
        const linkM3u = 'https://c.webapps.tv:8443/player_api.php?username=' + props.username + '&password=' + props.password + '&action=get_vod_streams';
        return linkM3u
    }

    const [ movies, setMovies ] = useState([]);

    useEffect( () => {
    loadMovies();
    }, []);

    const loadMovies = async () => {
    await fetch(m3u(props))
        .then(response => response.json())
        .then(receivedData => setMovies(receivedData));
    }

    return (
    <div className="moviesContainer">
        {/* Console para ver o array dos filmes */}
        {console.log(movies)}
        {movies.map(movie => (
        <div key={movie.num} className="movieBox">
            <img src={movie.stream_icon} className="movieImg"></img>
            <p className="movieTitle">{movie.name}</p>
        </div>
        ))}
    </div>
    );
}