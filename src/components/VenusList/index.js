import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
import { useMedia } from 'react-use'
import { withRouter } from 'react-router-dom'

import theme from '../../theme'
import { FlexLayout, Row } from '../styles'
import { VenusText } from '../../components/styles'
import VenusIcon from '../../components/VenusIcon'
import xvsIcon from '../../assets/img/active-xvs.svg'

const OVERVIEW_TOKEN_BLACKLIST = [];

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 1fr 1fr;
  grid-template-areas: 'market perday supplyapy borrowapy';
  padding: 1.25rem 1.125rem;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  cursor: ${props => props.header ? "auto" : "pointer"};

  &:hover {
    border-left: ${props => props.header ? "none" : "2px solid " + theme.colorOrange};
    background-color: ${props => props.header ? "transparent" : theme.bgActive};
  }

  > * {
    justify-content: flex-end;

    &:first-child {
      justify-content: flex-start;
      text-align: left;
      width: 100px;
    }
  }

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 1.5fr 0.6fr 1fr 1fr;
    grid-template-areas: 'market perday supplyapy borrowapy';
  }
`

const ListWrapper = styled.div``

const ClickableText = styled(Text)`
  display: flex;
  align-items: center;
  text-align: end;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  user-select: none;
  color: ${theme.colorWhite};

  @media screen and (max-width: 640px) {
    font-size: 0.85rem;
  }
`

const DataText = styled(Flex)`
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text1};

  & > * {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const SORT_FIELD = {
  MARKET: 'market',
  PERDAY: 'perday',
  SUPPLYAPY: 'supplyapy',
  BORROWAPY: 'borrowapy',
}

// @TODO rework into virtualized list
function VenusList({ tokens }) {
  // sorting
  const [sortDirection, setSortDirection] = useState(true)
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.PERDAY)

  const below640 = useMedia('(max-width: 640px)')
  // const below680 = useMedia('(max-width: 680px)')
  // const below600 = useMedia('(max-width: 600px)')

  // useEffect(() => {
  // }, [tokens])

  const formattedTokens = useMemo(() => {
    return (
      tokens &&
      Object.keys(tokens)
        .filter((key) => {
          return !OVERVIEW_TOKEN_BLACKLIST.includes(key)
        })
        .map((key) => tokens[key])
    )
  }, [tokens])

  const filteredList = useMemo(() => {
    return (
      formattedTokens &&
      formattedTokens
        .sort((a, b) => {
          return a[sortedColumn] > b[sortedColumn] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1
        })
    )
  }, [formattedTokens, sortDirection, sortedColumn])

  const ListItem = ({ item }) => {
    return (
      <DashGrid>
        <DataText area="market" fontWeight="500">
          <Row>
            <VenusIcon icon={item.icon} width="24px" height="24px" marginRight="8px" />
            <VenusText>{item.name}</VenusText>
          </Row>
        </DataText>
        <DataText area="perday">
          <VenusText>{item.perday}</VenusText>
        </DataText>
        <DataText area="supplyapy">
          <VenusText>{item.supplyapy}</VenusText>
        </DataText>
        <DataText area="borrowapy">
          <VenusText>{item.borrowapy}</VenusText>
        </DataText>
      </DashGrid>
    )
  }

  const MobileListItem = ({ item }) => {
    return (
      <FlexLayout justify="space-between" align="flex-start" padding="10px 0">
        <FlexLayout>
          <VenusIcon icon={item.icon} width="24px" height="24px" marginRight="8px" />
          <VenusText>{item.name}</VenusText>
        </FlexLayout>
        <FlexLayout direction="column" align="flex-end">
          <VenusText>{"Per day: " + item.perday}</VenusText>
          <VenusText>{"Supply APY: " + item.supplyapy}</VenusText>
          <VenusText>{"Borrow APY: " + item.borrowapy}</VenusText>
        </FlexLayout>
      </FlexLayout>
    )
  }

  return (
    <ListWrapper>
      <DashGrid header style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
        <Flex alignItems="center" justifyContent="flexStart">
          <ClickableText
            area="name"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.MARKET)
              setSortDirection(sortedColumn !== SORT_FIELD.MARKET ? true : !sortDirection)
            }}
          >
            Market {sortedColumn === SORT_FIELD.MARKET ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>

        <Flex alignItems="center">
          <ClickableText
            area="perday"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.PERDAY)
              setSortDirection(sortedColumn !== SORT_FIELD.PERDAY ? true : !sortDirection)
            }}
          >
            <VenusIcon icon={xvsIcon} width="16px" height="16px" marginRight="8px" />
            Per Day {sortedColumn === SORT_FIELD.PERDAY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="supplyapy"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.SUPPLYAPY)
              setSortDirection(sortedColumn !== SORT_FIELD.SUPPLYAPY ? true : !sortDirection)
            }}
          >
            Supply 
            <VenusIcon icon={xvsIcon} width="16px" height="16px" marginLeft="8px" marginRight="8px" />
            Apy
            {sortedColumn === SORT_FIELD.SUPPLYAPY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="borrowapy"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.BORROWAPY)
              setSortDirection(sortedColumn !== SORT_FIELD.BORROWAPY ? true : !sortDirection)
            }}
          >
            Borrow 
            <VenusIcon icon={xvsIcon} width="16px" height="16px" marginLeft="8px" marginRight="8px" />
            Apy
            {sortedColumn === SORT_FIELD.BORROWAPY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
      </DashGrid>
      <List p={0}>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div key={index}>
                {
                  !below640 && <ListItem key={index} item={item} />
                }
                {
                  below640 && <MobileListItem key={index} item={item} />
                }
              </div>
            )
          })}
      </List>
    </ListWrapper>
  )
}

export default withRouter(VenusList)
