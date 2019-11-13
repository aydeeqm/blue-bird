import styled, { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css` animation: ${time} ${fadeInKeyframes} ${type};`

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

const Img = styled.img`
  ${fadeIn({ time: '5s' })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display:flex;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

export {
  ImgWrapper,
  Img,
  Button
}
