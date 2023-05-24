# Import necessary modules
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests

# Create FastAPI app
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get('/')
def root():
    # Define the route to fetch Pokemon data
    return {'message': 'Welcome to the Pokedex API!'}


@app.get('/pokemon')
async def get_pokemon(id: int):
    if not id:
        raise HTTPException(status_code=400, detail='Please provide a Pokemon ID.')

    # Fetch Pokemon Picture from external API
    pokemon_name_picture_url = f'https://pokeapi.co/api/v2/pokemon/{id}'
    response_name_picture = requests.get(pokemon_name_picture_url)

    # Fetch Pokemon flavor(description) info from external API
    pokemon_descriptions_url = f'https://pokeapi.co/api/v2/pokemon-species/{id}'
    response_descriptions = requests.get(pokemon_descriptions_url)

    # Process the response and construct the Pokemon info
    pokemon_info = {}

    if response_name_picture.status_code == 200:
        pokemon_name_picture_data = response_name_picture.json()
        pokemon_info['pokemon_id'] = pokemon_name_picture_data['id']
        pokemon_info['pokemon_picture'] = pokemon_name_picture_data['sprites']['front_default']
        pokemon_info['pokemon_name'] = pokemon_name_picture_data['name'].capitalize()
    else:
        # Raise an exception if Pokemon Picture is not found
        raise HTTPException(status_code=404, detail='Pokemon Picture or Name not found.')

    if response_descriptions.status_code == 200:
        pokemon_descriptions = response_descriptions.json()['flavor_text_entries']
        for pokemon_description in pokemon_descriptions:
            if pokemon_description['language']['name'] == 'en':
                pokemon_info['pokemon_description'] = pokemon_description['flavor_text']

    else:
        # Raise an exception if Pokemon Specie Infos is not found
        raise HTTPException(status_code=404, detail='Pokemon Description Info not found.')

    return pokemon_info
