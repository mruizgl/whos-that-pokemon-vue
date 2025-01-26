import axios from "axios";

export class pokemonApi {
    static async get(limit: string) {
        const response = await axios.get(
            'https://pokeapi.co/api/v2/pokemon' + limit + '&offset=0'
        );
        return response;
    }
}