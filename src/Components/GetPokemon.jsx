import { useState } from "react";
import GetPokeList from "./GetPokeList";

const GetPokemon = () => {

    let pokeList = GetPokeList()

    return (
        console.log(pokeList)
    )
}

export default GetPokemon