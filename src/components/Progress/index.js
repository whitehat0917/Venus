import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const OuterContainer = styled.div`
  background-color: ${props => props.backgroundColor || theme.colorGrayLightest};
  border-radius: 100px;
  width: ${props => props.width || "100%"};
  height: 7px;
  position: relative;
  margin: 10px 0;
`

const InnerProgress = styled.div`
  background-color: ${props => props.color || theme.colorYellow};
  border-radius: 100px;
  width: ${props => props.width || "100%"};
  height: 7px;
  position: absolute;
  left: 0;
  top: 0;
`

const VenusProgress = ({ percent = 0, width = "200px", progressColor = theme.colorYellow, backgroundColor = theme.colorGrayLightest}) => {
  const innerWidth = String(percent) + "%";

  return (
    <OuterContainer width={width} backgroundColor={backgroundColor}>
      <InnerProgress width={innerWidth} color={progressColor} />
    </OuterContainer>
  )
}

export default VenusProgress