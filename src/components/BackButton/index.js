import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"

import BackIcon from '../../assets/img/icons/next.png'

const IconContainer = styled.span`
  display: flex;
  color: #aeaeae;
  flex-shrink: 0;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  cursor: pointer;

  img {
    transform: rotate(180deg);
    width: 26px;
    height: 16px;
  }
`

const BackButton = ({ marginLeft = "0", marginRight = "0" }) => {
  let history = useHistory();

  return (
    <IconContainer marginLeft={marginLeft} marginRight={marginRight} onClick={() => history.goBack()}>
      <img src={BackIcon} alt="GoBack" />
    </IconContainer>
  )
}

export default BackButton