import { useMemo } from "react";

import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher"

export const HeroList = ( { publisher = '' } ) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <>
            <h4 className="list-group list-group-item-primary fw-bold text-center">Hero List - { publisher }</h4>
            <div className="row row-cols-1 row-cols-md-3 g-3 fs-5 animate__animated animate__slideInUp">
                {
                    heroes.map( hero => (
                        <HeroCard
                            key={ hero.id } 
                            { ...hero }    
                        />
                    ))
                }
            </div>
        </>
    )
}
