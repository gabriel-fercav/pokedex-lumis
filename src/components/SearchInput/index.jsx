import React from 'react'

import { Input } from '@/components/ui/input'
import { useIsMobile } from '@/hooks/use-mobile'

import SearchIcon from '@/assets/search.svg'

const SearchInput = ({ value, setValue }) => {
  const isMobile = useIsMobile()

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
  }

  return (
    <div className="relative w-full max-w-2xl">
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={
          isMobile ? 'Faça uma busca pelo pokémon' : 'Faça uma busca pelo nome do pokémon'
        }
        className="w-full h-12 rounded-3xl bg-gray-200 px-10 pr-12 placeholder:font-normal placeholder:text-gray-700 focus:ring-0"
      />
      <img
        src={SearchIcon}
        alt="Buscar"
        className="absolute w-4 right-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  )
}

export default SearchInput
