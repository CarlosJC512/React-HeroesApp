import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from '../../helpers/getHeroesById';
import { heroImages } from "../../helpers/heroImages";

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const hero = useMemo( () => getHeroesById( heroeId ), [ heroeId ]);

    const navigate = useNavigate();

    const handleReturn = () => { 
        navigate( -1 );
    }

    if(!hero) {
        return <Navigate to="/" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // const imagePath = `/assets/${id}.jpg`; // desde assets
    const imagePath = heroImages(`./${ id }.jpg`);

    return (
        <div className="container">
            <div className="row mt-5">

                <div className="col-4">
                    <img 
                        src={ imagePath } 
                        alt={ superhero }
                        className="img-thumbnail animate__animated animate__backInLeft"
                    />
                </div>

                <div className="col-8 animate__animated animate__backInRight">
                    <h3>{ superhero }</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <b>Alter ego: { alter_ego }</b>
                        </li>
                        <li className="list-group-item"> <b>Publisher: { publisher }</b> </li>
                        <li className="list-group-item"> <b>First appearance: { first_appearance }</b> </li>
                        <li className="list-group-item"> <b>First appearance: { first_appearance }</b> </li>
                    </ul>

                    <h5 className="mt-3">Characters</h5>
                    <p>{ characters }</p>

                    <button 
                        className="btn btn-outline info"
                        onClick={ handleReturn }
                    >
                        Return
                    </button>
                </div>

            </div>       
        </div>
    )
}
