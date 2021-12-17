type IPokemonPropertyDefaultType = {
    id: number;
    name: string;
}

export interface IPokemonItemProps {
    id: number;
    name: number;
    pokemon_v2_pokemonspecy: { pokemon_v2_pokemonspecies: IPokemonPropertyDefaultType[] };
    pokemon_v2_pokemonstats: { pokemon_v2_stat: IPokemonPropertyDefaultType }[];
    pokemon_v2_pokemontypes: { pokemon_v2_type: IPokemonPropertyDefaultType }[];
    weight: number;
    pokemon_v2_pokemonmoves: { pokemon_v2_move: IPokemonPropertyDefaultType }[];
    onClickPokemon: () => void;
    isPokemonDetailsVisible: boolean;
}
