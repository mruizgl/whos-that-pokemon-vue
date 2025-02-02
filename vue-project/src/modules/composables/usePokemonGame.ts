import { computed, onMounted, ref } from 'vue';
import { GameStatus } from '../pokemon/interfaces/game-status.enum';
import { pokemonApi } from '../pokemon/api/pokemonApi';
import type {Pokemon} from '../pokemon/interfaces/pokemon.interface';
import type { PokemonListResponse } from '../pokemon/interfaces/pokemon-list-response';

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const pokemons = ref<Pokemon[]>([]);

    const isLoading = computed(() => pokemons.value.length === 0);

    const getPokemons = async (): Promise<Pokemon[]> => {
        const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    
        const pokemonsArray = response.data.results.map(pokemon => {
            const urlParts = pokemon.url.split('/');
            const id = urlParts[urlParts.length - 2] ?? 0;
            return {
                name: pokemon.name,
                id: +id,
            };
        });
    
        
        pokemonsArray.sort(() => Math.random() - 0.5);
    
        
        console.log(pokemonsArray);
    
        return pokemonsArray;
    };

    onMounted(async() => {
        const pokemons = await getPokemons();

        console.log(pokemons);
        
    });

    return {
        gameStatus,
        isLoading
    };
};
