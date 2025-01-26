import { onMounted, ref } from 'vue';
import { GameStatus } from '../pokemon/interfaces/game-status.enum';
import { pokemonApi } from '../pokemon/api/pokemonApi';

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);

    const getPokemons = async () => {
        try {
            const response = await pokemonApi.get('/?limit=151');

            console.log(response.data);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    onMounted(() => {
        getPokemons();
    });

    return {
        gameStatus,
    };
};
