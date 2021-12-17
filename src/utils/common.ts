export const generatePokemonImageUrl = (id: number): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const transformPropsToDisplay = (item: string[], separator = ','): string => {
    return item.join(separator);
};