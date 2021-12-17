import React, {useState} from "react";
import {PokemonItem} from "../PokemonItem/PokemonItem";
import {IPokemonListProps} from "./IPokemonListProps";

import "./PokemonList.scss";

const PokemonList: React.FC<IPokemonListProps> = ({pokemons}) => {
    const [isPokemonDetailsVisible, setIsPokemonDetailsVisible] = useState<boolean>(false);

    return (
        pokemons?.length ? (
            <div className="PokemonList__container">
                {pokemons.map((pokemon) => (
                    <PokemonItem
                        key={pokemon.id}
                        {...pokemon}
                        onClickPokemon={() => setIsPokemonDetailsVisible(prev => !prev)}
                        isPokemonDetailsVisible={isPokemonDetailsVisible}
                    />
                ))}
            </div>
        ) : null
    );
};

export default PokemonList;
