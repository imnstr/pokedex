import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import PokemonList from "components/Pokemon/components/PokemonList/PokemonList";
import {GET_POKEMONS} from "../../api/pokemon";
import {POKEMONS_PER_PAGE} from "../../const/common";
import {IPokemonItemProps} from "components/Pokemon/components/PokemonItem/IPokemonItemProps";

import "./PokemonWrapper.scss";

const PokemonWrapper: React.FC = () => {
    const [pokeName, setPokeName] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const {data} = useQuery<{ pokemon_v2_pokemon: IPokemonItemProps[] }>(GET_POKEMONS, {
        variables: {
            offset: page * POKEMONS_PER_PAGE,
            searchingPokemonName: pokeName
        }
    });
    const pokemons = data?.pokemon_v2_pokemon;

    return (
        <div className="Pokemon__wrapper">
            <input
                className="Pokemon__search"
                type="text"
                placeholder="Search pokemon..."
                onChange={(e) => setPokeName(e.target.value)}
            />
            <PokemonList pokemons={pokemons}/>
            <div className="Pokemon__pagination">
                <button disabled={page === 0} onClick={() => setPage(prev => prev - 1)}>
                    prev page
                </button>
                <button disabled={pokemons?.length < POKEMONS_PER_PAGE} onClick={() => setPage(prev => prev + 1)}>next
                    page
                </button>
            </div>
        </div>
    );
};

export default PokemonWrapper;
