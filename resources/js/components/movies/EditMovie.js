import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: '',
        genre: '',
        any: '',
        score: ''
    })
    useEffect(() => {
        async function recoverMovie() {
            const url = `http://localhost:8000/api/movies/${id}`;
            const res = await axios.get(url)
                .then(response => { return response.data })
                .catch(error => { return error; })
            if (res.success) {
                setMovie(res.data);
            }
        }
        recoverMovie();
    }, [])

    const saveMovie = async () => {
        const url = `http://localhost:8000/api/movies/${id}`;
        const res = await axios.put(url, movie)
            .then(response => { return response.data })
            .catch(error => { return error; })
        if (res.success) {
            navigate('/movies/list')
        }
    }

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        saveMovie();
        e.preventDefault()
    }
    
    const { title, genre, any, score } = movie;
    return (
        <form action='http://localhost:8000/api/movies/update'
            method='post' onSubmit={handleSubmit}>
            <h3>Editar Película</h3>
            <input
                type="text"
                name='title'
                value={title}
                onChange={handleChange}
                placeholder="Título"
            />
            <input
                type="text"
                name='genre'
                value={genre}
                onChange={handleChange}
                placeholder="Género"
            />
            <input
                type="text"
                name='any'
                value={any}
                onChange={handleChange}
                placeholder="Año"
            />
            <input
                type="text"
                name='score'
                value={score}
                onChange={handleChange}
                placeholder="Puntuación"
            />
            <button
                type='submit'
                className='submit'>
                Editar
            </button>
        </form>
    )
}

export default EditMovie