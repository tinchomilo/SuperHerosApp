import { heroes } from "../data/heros";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes( publisher ) ) 
        throw new Error( `publisher "${ publisher }" no es correcto` )

    return heroes.filter( ( hero ) => hero.publisher === publisher )
}