# Pokedex
###### This application includes simple react starter kit.
###### The main step before starting development was creating architecture of this project.All packages are independent of each other and can be reused in future features. API works with GrahpQL and moved to corresponding directory. TypeScript also included and all code have typings. For the best performance pokemon component was splitted for three components. Util functions moved to utils directory.

### Issues
###### 1) Pokemon api have some issues with GraphQL - response cant includes pokemon image url, so it resolved by utils function ***"generatePokemonImageUrl"*** which using pokemon id to replace direct url.
###### 2) Pokemons have a lot of moves, so constant ***"POKEMON_MAX_MOVES_TO_DISPLAY"*** can limit their value to exclude terrible view while getting pokemons information.
###### 3) Styling for the components so simple because of spending this time to make architecture and code better.


### Future improvements
###### 1) Rewrite styles for all components and make view better.
###### 2) Remove extra dependencies.
###### 3) Update pagination to support any page click.
###### 4) Add spinner on loading data.

## Usage:
Run in terminal ***npm run dev***