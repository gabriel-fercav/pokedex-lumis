import React, { useMemo } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PokeCard from '@/components/PokeCard'
import SearchInput from '@/components/SearchInput'

import { usePokemonSearch } from '@/hooks/use-search-pokemon'
import { usePokemons } from '@/hooks/use-pokemons'
import './styles.css'

const Home = () => {
  const { searchValue, setSearchValue, pokemon, loading } = usePokemonSearch()
  const { pokemonList, isFetching, isLoading, page, goToPage } = usePokemons()

  const displayedPokemons = useMemo(() => {
    if (searchValue)
      return <PokeCard isLoading={loading || isFetching || isLoading} pokemon={pokemon} />

    if (!pokemonList) {
      return [1, 2, 3, 4, 5, 6].map((skeleton) => <PokeCard key={skeleton} isLoading />)
    }

    return (
      <>
        {pokemonList?.map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.number}
              isLoading={loading || isFetching || isLoading}
              pokemon={pokemon}
            />
          )
        })}
      </>
    )
  }, [isFetching, isLoading, loading, pokemon, pokemonList, searchValue])

  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <div className="header-wrapper">
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </div>
      <div className="content-wrapper">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center gap-4 flex-wrap">
          {displayedPokemons}
        </div>
      </div>
      <Footer goToPage={goToPage} isFetching={isFetching} page={page} searchValue={searchValue} />
    </div>
  )
}

export default Home
