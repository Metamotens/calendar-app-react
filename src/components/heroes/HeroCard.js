import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
                             id,
                             superhero,
                             alter_ego,
                             first_appearance,
                             characters
                         }) => {
    return (
            <div className="row row-cols-1 row-cols-md-2 g-4" style={ { maxWidth: 400 } }>
                <div className="col">
                    <div className="card">
                        <img src={ `./assets/heroes/${ id }.jpg` } className="img-thumbnail animate__fadeInLeft" alt={ superhero }/>
                    </div>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                        {
                            alter_ego !== characters && <p className="card-text">{ characters }</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
    );
};