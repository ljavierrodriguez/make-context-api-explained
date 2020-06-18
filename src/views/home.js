import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Home = props => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    <Link to={"/"+store.name}>Cargar Nombre</Link>
                    {
                        !!props.match.params.name && (
                            <p>{props.match.params.name}</p>
                        ) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;