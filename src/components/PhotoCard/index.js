import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, elementRef] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={elementRef}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toogleLike) => {
                const handleFavClick = () => {
                  !liked && toogleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  setLiked(!liked)
                }
                return <FavButton liked={likes} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}
