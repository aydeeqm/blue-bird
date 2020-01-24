import React from 'react'
import { Helmet } from 'react-helmet'
import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>BlueBird - Tu favoritos</title>
        <meta name='descripcion' content='Aquí puedes encontrar tus favoritos' />
      </Helmet>
      <h1>Favs</h1>
      <FavsWithQuery />
    </>
  )
}
