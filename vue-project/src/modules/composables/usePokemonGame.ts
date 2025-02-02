import { computed, onMounted, ref } from 'vue';
import { GameStatus } from '../pokemon/interfaces/game-status.enum';
import { pokemonApi } from '../pokemon/api/pokemonApi';
import type {Pokemon} from '../pokemon/interfaces/pokemon.interface';
import type { PokemonListResponse } from '../pokemon/interfaces/pokemon-list-response';
import PokemonOptions from '../pokemon/components/PokemonOptions.vue';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const pokemons = ref<Pokemon[]>([]);
    const pokemonOptions = ref<Pokemon[]>([]);


    const randomPokemon = computed( () => {
        const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
        return pokemonOptions.value[randomIndex];
    });

    const isLoading = computed(() => pokemons.value.length === 0);

    const checkAnswer = (id: number) => {
        const hasWon = randomPokemon.value.id === id;

        if (hasWon) {
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin: {
                    y: 0.6
                }
            })
        }
    }

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

    const getNextOptions = (howMany: number = 4) => {
        gameStatus.value = GameStatus.Playing;
        pokemonOptions.value = pokemons.value.slice(0, howMany);
        pokemons.value = pokemons.value.slice(howMany);
    }

    

    onMounted(async() => {
        pokemons.value = await getPokemons();
        getNextOptions();
        console.log(pokemons);
        console.log(pokemonOptions);
        
    });

    return {
        gameStatus,
        isLoading,
        pokemonOptions,
        randomPokemon,
        getNextOptions,
        checkAnswer

    };
};
