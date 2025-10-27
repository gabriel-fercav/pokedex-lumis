import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import ArrowLeft from '@/assets/arrow-left.svg'
import ArrowRight from '@/assets/arrow-right.svg'

const Footer = ({ goToPage, isFetching, page, searchValue }) => {
  const [pageButtons] = useState([1, 2, 3])

  if (searchValue) return null

  return (
    <div className="flex-center pb-3 bg-background mt-15 mb-10 gap-3">
      <Button
        className="text-md"
        variant="ghost"
        onClick={() => goToPage(page - 1)}
        disabled={isFetching || page === 1}
      >
        <img src={ArrowLeft} className="w-3 h-3" alt="Seta para esquerda" />
        Anterior
      </Button>
      {pageButtons?.map((newPage) => {
        return (
          <Button
            onClick={() => goToPage(newPage)}
            variant={page === newPage ? 'default' : 'outline'}
            className="text-md cursor-default w-8 rounded-lg"
          >
            {newPage}
          </Button>
        )
      })}
      <Button
        className="text-md"
        variant="ghost"
        onClick={() => goToPage(page + 1)}
        disabled={isFetching}
      >
        Próximo
        <img src={ArrowRight} className="w-3 h-3" alt="Seta para direita" />
      </Button>
    </div>
  )
}

export default Footer
