import React from "react";
import {generatePokemonImageUrl, transformPropsToDisplay} from "src/utils/common";
import {IPokemonItemProps} from "./IPokemonItemProps";
import {POKEMON_MAX_MOVES_TO_DISPLAY} from "../../../../const/common";

import "./PokemonItem.scss";

export const PokemonItem: React.FC<IPokemonItemProps> = ({
                                                             id,
                                                             name,
                                                             pokemon_v2_pokemonspecy,
                                                             pokemon_v2_pokemonstats,
                                                             pokemon_v2_pokemontypes,
                                                             weight,
                                                             pokemon_v2_pokemonmoves,
                                                             onClickPokemon,
                                                             isPokemonDetailsVisible
                                                         }) => {

    const species = pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspecies;
    const stats = pokemon_v2_pokemonstats;
    const types = pokemon_v2_pokemontypes;
    const moves = pokemon_v2_pokemonmoves;

    return (
        <div className="PokemonItem__container" onClick={onClickPokemon}>
            <img src={generatePokemonImageUrl(id)}/>
            <h3>name: {name}</h3>
            {isPokemonDetailsVisible && (
                <div>
                    {!!species?.length && (
                        <h5>Species: {transformPropsToDisplay(species.map((item) => item.name))}</h5>
                    )}
                    {!!stats?.length && (
                        <h5>Stats: {transformPropsToDisplay(stats.map((item) => item.pokemon_v2_stat.name))}</h5>
                    )}
                    {!!types?.length && (
                        <h5>Types: {transformPropsToDisplay(types.map((item) => item.pokemon_v2_type.name))}</h5>
                    )}
                    <h5>weight: {weight}</h5>
                    {!!moves?.length && (
                        <h5>
                            Moves:
                            {transformPropsToDisplay(moves
                                .map((item) => item.pokemon_v2_move.name)
                                .slice(0, POKEMON_MAX_MOVES_TO_DISPLAY)
                            )}
                        </h5>
                    )}
                </div>
            )}
        </div>
    )
};
