import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
}) => {

    // const imagePath = `/assets/${id}.jpg`; // desde assets
    const imagePath = heroImages(`./${ id }.jpg`)

    return (
        <div className="col animate__animated animate__slideInUp">
            <div className="card">
                
                <div className="row no-glutters">
                    <div className="col-4">
                        <img src={ imagePath } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={ `/hero/${id}` }>
                                Más...
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
