import axios from "axios";
import type { AxiosResponse } from "axios";
import type  { PokemonListResponse } from "../interfaces/pokemon-list-response"; 

export class pokemonApi {
    static async get<T>(limit: string): Promise<AxiosResponse<T>> {  // Añadir tipo genérico <T>
        const response = await axios.get<T>(
            'https://pokeapi.co/api/v2/pokemon' + limit + '&offset=0'
        );
        return response;
    }
}