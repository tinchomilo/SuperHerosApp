import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])
    // const heroes = getHeroesByPublisher( publisher ); se puede escribir asi, useMemo me da mas agilidad al componente, si cambia algo en el componente, lo ocultamos, etc, useMemo evita que se renderize otra vez. 

    return (        
            <div className="card-columns animate__animated animate__fadeIn">
                {
                    heroes.map( hero => (
                        <HeroCard key={ hero.id }
                            { ...hero} />
                        
                    ))
                }
            
            </div>
            
        
    )
}
