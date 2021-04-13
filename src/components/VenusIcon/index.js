import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  color: #aeaeae;
  flex-shrink: 0;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const VenusIcon = ({ icon, width = "24px", height = "24px", marginLeft = "0", marginRight = "0" }) => {
  return (
    <IconContainer marginLeft={marginLeft} marginRight={marginRight}>
      <img src={icon} alt="Venus" style={{width: width, height: height}} />
    </IconContainer>
  )
}

export default VenusIcon