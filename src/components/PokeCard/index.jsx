import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Skeleton } from '@/components/ui/skeleton'

const PokeCard = ({ isLoading, pokemon }) => {
  const navigate = useNavigate()

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

  const typeColor = pokemonTypes.find((t) => t.type === pokemon?.types[0])?.color || 'text-gray-400'

  const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1)

  if (isLoading || !pokemon) {
    return <Skeleton className="pokecard-size rounded-lg" />
  }

  return (
    <div
      onClick={() => navigate('/details/' + pokemon?.name)}
      className="aspect-7/10 w-full bg-[#f0f3ff] hover:bg-[#e0e3ff] rounded-lg p-3 flex flex-col justify-between"
    >
      <div className="flex justify-between items-center mb-2">
        <p className={`text-md ${typeColor}`}>{capitalize(pokemon?.types[0])}</p>
        <p className="text-md">#{pokemon?.number}</p>
      </div>
      {!pokemon?.img ? (
        <img className="w-full h-auto" src={pokemon?.image} alt={capitalize(pokemon?.name)} />
      ) : (
        <Skeleton className="w-full h-24" />
      )}

      <div className="text-center mt-2">
        <p>{capitalize(pokemon?.name)}</p>
      </div>
    </div>
  )
}

export default PokeCard
