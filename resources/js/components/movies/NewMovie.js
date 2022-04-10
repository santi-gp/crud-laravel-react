import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(
    {
      title: '',
      genre: '',
      any: '',
      score: '',
    }
  )
  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    })
  }
  const saveMovie = async () => {
    const url = "http://localhost:8000/api/movies/create";
    const res = await axios.post(url, movie)
      .then(response => { return response.data })
      .catch(error => { return error })
      if (res.success) {
        navigate('/movies/list')
    }
  }
  const handleSubmit = (e) => {
    saveMovie();
    e.preventDefault();
  }
  const { title, genre, any, score } = movie;
  return (
    <form action='http://localhost:8000/api/movies/create'
      method='post' onSubmit={handleSubmit}>
      <h3>Añadir Película</h3>
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
        Enviar
      </button>
    </form>
  )
}

export default NewMovie