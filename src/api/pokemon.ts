import {POKEMONS_PER_PAGE} from "src/const/common";
import {gql} from "@apollo/client";

export const GET_POKEMONS = gql`
    query PokemonList($offset: Int, $searchingPokemonName: String)  {
        pokemon_v2_pokemon(limit: ${POKEMONS_PER_PAGE}, offset: $offset,where: {name: {_regex: $searchingPokemonName}}) {
            id
            name
            weight
            pokemon_v2_pokemonstats {
                pokemon_v2_stat {
                    id
                    name
                }
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    id
                    name
                }
            }
            pokemon_v2_pokemonmoves {
                pokemon_v2_move {
                    id
                    name
                }
            }
            pokemon_v2_pokemonspecy {
                pokemon_v2_pokemonspecies {
                    id
                    name
                }
            }
            pokemon_v2_pokemonsprites {
                id
                sprites
            }
        }
    }
`;

