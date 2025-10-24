import { useState } from 'react'

const getPokemonByName = async (name) => {
  if (!name) return null

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
  if (!res.ok) return null

  const data = await res.json()
  return {
    name: data.name,
    number: data.id,
    image: data.sprites.other['official-artwork'].front_default,
    types: data.types.map((t) => t.type.name),
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map((a) => a.ability.name),
  }
}

export const usePokemonSearch = (defaultValue = '') => {
  const [searchValue, setSearchValue] = useState(defaultValue)
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = async (value) => {
    setSearchValue(value)

    if (!value) {
      setPokemon(null)
      return
    }

    setLoading(true)
    const result = await getPokemonByName(value)
    setPokemon(result)
    setLoading(false)
  }

  return {
    searchValue,
    setSearchValue: handleChange,
    pokemon,
    loading,
  }
}
