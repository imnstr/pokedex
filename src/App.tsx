import React from "react";
import {client} from "./ApolloClient/client";
import {ApolloProvider} from "@apollo/client";
import PokemonWrapper from "components/Pokemon/PokemonWrapper";

const App: React.FC = () => (
    <ApolloProvider client={client}>
        <div className="App">
            <PokemonWrapper />
        </div>
    </ApolloProvider>
);

export default App;
