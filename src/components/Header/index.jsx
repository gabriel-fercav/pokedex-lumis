import React from 'react'

import PokemonLogo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center w-full md:h-[92px] border-b border-zinc-200 md:px-10 max-md:px-4 py-3">
      <div>
        <img className="max-md:w-30 w-[124px] h-auto" src={PokemonLogo} alt="Logo" />
      </div>
      <div className="flex items-center gap-2">
        <Button className="text-md" variant="secondary" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button className="text-md" variant="ghost" onClick={() => console.log('click')}>
          Pokédex
        </Button>
      </div>
    </div>
  )
}

export default Header
