import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
import { useMedia } from 'react-use'
import { withRouter } from 'react-router-dom'
import { Minus } from 'react-feather'

import theme from '../../theme'
import { FlexLayout, Row, CustomLink } from '../styles'
import { VenusText, Divider, CircleDiv } from '../../components/styles'

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
`

const Arrow = styled.div`
  color: ${theme.colorYellow};
  opacity: ${(props) => (props.faded ? 0.3 : 1)};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const ListWrapper = styled.div``

// @TODO rework into virtualized list
const ProposalList = ({ tokens, itemMax = 5 }) => {
  // page state
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  const below1440 = useMedia('(max-width: 1440px)')

  useEffect(() => {
    setMaxPage(1) // edit this to do modular
    setPage(1)
  }, [tokens])

  const formattedTokens = useMemo(() => {
    return (
      tokens &&
      Object.keys(tokens)
        .map((key) => tokens[key])
    )
  }, [tokens])

  useEffect(() => {
    if (tokens && formattedTokens) {
      let extraPages = 1
      if (formattedTokens.length % itemMax === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(formattedTokens.length / itemMax) + extraPages)
    }
  }, [tokens, itemMax])

  const filteredList = useMemo(() => {
    return (
      formattedTokens &&
      formattedTokens
        .slice(itemMax * (page - 1), page * itemMax)
    )
  }, [tokens, itemMax, page])

  const getColor = (status) => {
    if (status == "Passed")
      return theme.colorDarkGreen
    else if (status == "Failed")
      return theme.colorWhite
    else if (status == "Canceled")
      return theme.colorOrange
  }

  const ListItem = ({ item, index }) => {
    return (
      <CustomLink to={'vote/proposal/' + item.number}>
        <FlexLayout padding="15px 0" direction="column" align="flex-start">
          <VenusText fontSize="20px" fontWeight="900" margin="0 0 20px 0">{item.title}</VenusText>
          <FlexLayout justify="space-between" width="100%">
            <FlexLayout direction={below1440 ? "column" : "row"}>
              <FlexLayout padding="0 10px">
                <VenusText fontSize="16px" fontWeight="900" color={theme.colorSecondary} padding="0 5px">{item.number}</VenusText>
                <VenusText fontSize="16px" fontWeight="900" color={theme.colorSecondary} padding="0 5px">{item.status1}</VenusText>
                <VenusText fontSize="16px" fontWeight="900" color={theme.colorSecondary} padding="0 5px">{item.date1}</VenusText>
              </FlexLayout>
              <FlexLayout padding="0 10px">
                <VenusText 
                  fontSize="16px" fontWeight="900" padding="0 5px"
                  color={getColor(item.status2)}
                >
                  {item.status2}
                </VenusText>
                <VenusText fontSize="16px" fontWeight="900" color={theme.colorSecondary} padding="0 5px">{item.date2}</VenusText>
              </FlexLayout>
            </FlexLayout>
            <FlexLayout width="130px" padding="0 10px 0 20px">
              <CircleDiv width="30px" height="30px">
                <Minus></Minus>
              </CircleDiv>
              <FlexLayout direction="column" width="50px" align="flex-start" margin="0 0 0 20px">
                <VenusText color={theme.colorOrange} fontSize="16px" fontWeight="900">NO</VenusText>
                <VenusText color={theme.colorOrange} fontSize="16px" fontWeight="900">VOTE</VenusText>
              </FlexLayout>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </CustomLink>
    )
  }

  return (
    <ListWrapper>
      <List p={0}>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div key={index}>
                <ListItem key={index} index={(page - 1) * itemMax + index + 1} item={item} />
                <Divider />
              </div>
            )
          })}
      </List>
      <PageButtons>
        <div onClick={() => setPage(page === 1 ? page : page - 1)}>
          <Arrow faded={page === 1 ? true : false}>←</Arrow>
        </div>
        <VenusText>{'Page ' + page + ' of ' + maxPage}</VenusText>
        <div onClick={() => setPage(page === maxPage ? page : page + 1)}>
          <Arrow faded={page === maxPage ? true : false}>→</Arrow>
        </div>
      </PageButtons>
    </ListWrapper>
  )
}

export default withRouter(ProposalList)
