import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ListMovie() {
    const [movies, setMovies] = useState([]);
    //const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        async function recuperarMovies() {
            const url = "http://localhost:8000/api/movies/list";
            const res = await axios.get(url)
                .then(response => { return response.data })
                .catch(error => { return error; })
            if (res.success) {
                setMovies(res.data);
            }
        }
        recuperarMovies();
    }, [])
    //[loading]
    const onClickDelete = async (id) => {
        //setLoading(true);
        const url = `http://localhost:8000/api/movies/${id}`;
        const res = await axios.delete(url)
            .then(response => { return response.data })
            .catch(error => { return error; })
        if (res.success) {
            //notifyOk(res.message);
            //alert('Borrado correcto');
            navigate('/movies/list')
        } /*else {
            //notifyError(res.message);
            //alert('No se pudo borrar');
        }*/
        //setLoading(false);
    }
    return (
        <div className='mt-2'>
            <div className='grid bgc-3 color-white font-bold'>
                <div>#</div>
                <div>Título</div>
                <div>Género</div>
                <div>Año</div>
                <div>Puntuación</div>
                <div>Acciones</div>
            </div>
            {
                movies.map((movie) => (
                    <div key={movie.id} className="grid">
                        <div>{movie.id}</div>
                        <div>{movie.title}</div>
                        <div>{movie.genre}</div>
                        <div>{movie.any}</div>
                        <div>{movie.score}</div>
                        <div>
                            <Link className="mr-2 bgc-yellow pyx-12 color-black" to={`/movies/${movie.id}`}>
                                Editar
                            </Link>
                            <Link className='ml-2 bgc-red pyx-12 color-white' to={`/movies/list`} onClick={() => onClickDelete(movie.id)}>
                                Borrar
                            </Link>
                        </div>
                    </div>
                )
                )
            }

        </div>

    )
}

export default ListMovie