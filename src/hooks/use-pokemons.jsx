import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const POKEMONS_PER_PAGE = 18

const getPokemons = async (page = 1) => {
  const offset = (page - 1) * POKEMONS_PER_PAGE
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`
  )

  if (!res.ok) throw new Error('Erro ao buscar pokémons')

  const { results } = await res.json()

  const detailedPokemons = await Promise.all(
    results.map(async (pokemon) => {
      const detailRes = await fetch(pokemon.url)

      if (!detailRes.ok) throw new Error('Erro ao buscar detalhes do pokémon')

      const data = await detailRes.json()

      return {
        name: data.name,
        number: data.id,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types.map((t) => t.type.name),
      }
    })
  )

  return detailedPokemons
}

export const usePokemons = () => {
  const [page, setPage] = useState(1)

  const {
    status,
    data: pokemonList,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => getPokemons(page),
    refetchOnWindowFocus: false,
  })

  const isLoading = status === 'pending'

  const goToPage = (newPage) => {
    setPage(newPage)
    refetch()
  }

  return { pokemonList, isFetching, isLoading, page, goToPage }
}
