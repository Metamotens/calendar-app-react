import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';
import { Redirect } from 'react-router-dom';

export const HeroScreen = ({ history }) => {

    const { id } = useParams();
    const hero = useMemo(() => getHeroById(id), [id]);

    if (hero.length === 0) {
        return <Redirect to="/"/>;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack();
    };

    return (
            <div className="row mt-5">
                <div className="col-4">
                    <img
                            src={ `../assets/heroes/${ id }.jpg` }
                            alt={ superhero }
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3> { superhero } </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b> Alter ego: </b> { alter_ego } </li>
                        <li className="list-group-item"><b> Publisher: </b> { publisher } </li>
                        <li className="list-group-item"><b> First appearance: </b> { first_appearance } </li>
                    </ul>

                    <h5> Characters </h5>
                    <p> { characters } </p>

                    <button
                            className="btn btn-outline-info"
                            onClick={ handleReturn }
                    >
                        Return
                    </button>

                </div>

            </div>
    );
};

