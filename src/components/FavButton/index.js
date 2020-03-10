import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  like: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired
}
