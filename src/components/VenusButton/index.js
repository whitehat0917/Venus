import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const ButtonContainer = styled.div`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  margin: auto;

  button {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: linear-gradient(to right, rgb(242, 194, 101), rgb(247, 180, 79));
    outline: none;
    border: none;

    span {
      font-size: 13px;
      font-weight: 500;
      color: ${theme.colorWhite};
    }
  }
`

const VenusButton = ({ text, width="100%", height="auto", disabled, handleClick }) => {
  return (
    <ButtonContainer width={width} height={height}>
      <button className={disabled ? 'button-disabled' : ''} onClick={handleClick}>
        <span>{text}</span>
      </button>
    </ButtonContainer>
  )
}

export default VenusButton