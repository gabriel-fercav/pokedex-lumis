/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '@/components/Header'
import { usePokemonSearch } from '@/hooks/use-search-pokemon'
import { Skeleton } from '@/components/ui/skeleton'

const Details = () => {
  const { pokemonIdOrName } = useParams()
  const { setSearchValue, pokemon, loading } = usePokemonSearch()

  useEffect(() => {
    setSearchValue(pokemonIdOrName)
  }, [pokemonIdOrName])

  if (!pokemon || loading) {
    return (
      <div className="max-w-screen overflow-x-hidden">
        <Header />

        <div className="content-wrapper flex flex-col items-center mt-10 px-4">
          <Skeleton className="w-full h-80 md:w-90 md:h-80 object-contain mb-4" />
        </div>
      </div>
    )
  }

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  const pokemonTypes = [
    { type: 'normal', color: 'text-gray-400' },
    { type: 'fire', color: 'text-red-400' },
    { type: 'water', color: 'text-blue-400' },
    { type: 'electric', color: 'text-yellow-400' },
    { type: 'grass', color: 'text-green-400' },
    { type: 'ice', color: 'text-cyan-300' },
    { type: 'fighting', color: 'text-orange-600' },
    { type: 'poison', color: 'text-purple-400' },
    { type: 'ground', color: 'text-amber-600' },
    { type: 'flying', color: 'text-sky-300' },
    { type: 'psychic', color: 'text-pink-400' },
    { type: 'bug', color: 'text-lime-500' },
    { type: 'rock', color: 'text-yellow-700' },
    { type: 'ghost', color: 'text-indigo-400' },
    { type: 'dragon', color: 'text-indigo-600' },
    { type: 'dark', color: 'text-gray-700' },
    { type: 'steel', color: 'text-slate-400' },
    { type: 'fairy', color: 'text-pink-300' },
  ]

  const getTypeColor = (type) => pokemonTypes.find((t) => t.type === type)?.color || 'text-gray-400'

  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />

      <div className="content-wrapper flex flex-col items-center mt-10 px-4">
        <div className="flex flex-col items-center bg-[#f0f3ff] rounded-lg p-6 w-full max-w-2xl shadow-md">
          <img src={pokemon.image} alt={pokemon.name} className="w-48 h-48 object-contain mb-4" />

          <h1 className="text-2xl font-bold mb-1">
            {capitalize(pokemon.name)} <span className="text-gray-500">#{pokemon.number}</span>
          </h1>

          <div className="flex gap-2 mb-6">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`text-sm px-3 py-1 rounded-full capitalize ${getTypeColor(
                  type
                )} bg-opacity-20`}
              >
                {type}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 text-center w-full">
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Height</p>
              <p className="font-semibold">{pokemon.height / 10} m</p>
            </div>
            <div className="bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm">Weight</p>
              <p className="font-semibold">{pokemon.weight / 10} kg</p>
            </div>
            <div className="col-span-2 bg-white rounded-lg py-3 shadow-sm">
              <p className="text-gray-500 text-sm mb-1">Abilities</p>
              <div className="flex justify-center flex-wrap gap-2">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full capitalize"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
