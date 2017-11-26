import axios from 'axios';

export const FETCH_GAMES = 'fetch_games';

const URL = 'https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle';
const config = {headers: {'x-api-key': 'x79qTUx0QO5IzR8zsiFvt5a5xOy5HikV2QBLjy0D'}}; 

export function fetchGames() {    
    const request = axios.get(URL, config);

    return {
        type: FETCH_GAMES,
        payload: request
    };
}