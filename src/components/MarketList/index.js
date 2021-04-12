import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
import { useMedia } from 'react-use'
import { withRouter } from 'react-router-dom'

import theme from '../../theme'
import { FlexLayout, Row, CustomLink } from '../styles'
import { VenusText } from '../../components/styles'
import VenusIcon from '../../components/VenusIcon'

const OVERVIEW_TOKEN_BLACKLIST = [];

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 'name liq vol';
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
    grid-template-columns: 1.0fr 1.0fr 1fr 1fr 1fr 1fr 1fr;
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
  TOTALSUPPLY: 'totalsupply',
  SUPPLYAPY: 'supplyapy',
  TOTALBORROW: 'totalborrow',
  BORROWAPY: 'borrowapy',
  LIQUIDITY: 'liquidity',
  PRICE: 'price',
}

// @TODO rework into virtualized list
const MarketList = ({ tokens }) => {
  // sorting
  const [sortDirection, setSortDirection] = useState(true)
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.TOTALSUPPLY)

  const below960 = useMedia('(max-width: 960px)')
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
          // if (sortedColumn === SORT_FIELD.SYMBOL || sortedColumn === SORT_FIELD.NAME) {
            return a[sortedColumn] > b[sortedColumn] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1
          // }
          // return parseFloat(a[sortedColumn]) > parseFloat(b[sortedColumn])
          //   ? (sortDirection ? -1 : 1) * 1
          //   : (sortDirection ? -1 : 1) * -1
        })
    )
  }, [formattedTokens, sortDirection, sortedColumn])

  const ListItem = ({ item }) => {
    return (
      <CustomLink to={'market/' + item.name}>
        <DashGrid>
          <DataText area="market" fontWeight="500">
            <Row>
              <VenusIcon icon={item.icon} width="30px" height="30px" marginRight="8px" />
              <VenusText>{item.name}</VenusText>
            </Row>
          </DataText>
          <DataText area="totalsupply">
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.totalsupply.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.totalsupply.coin}</VenusText>
            </FlexLayout>
          </DataText>
          <DataText area="supplyapy">
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.supplyapy.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.supplyapy.coin}</VenusText>
            </FlexLayout>
          </DataText>
          <DataText area="totalborrow">
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.totalborrow.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.totalborrow.coin}</VenusText>
            </FlexLayout>
          </DataText>
          <DataText area="borrowapy">
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.borrowapy.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.borrowapy.coin}</VenusText>
            </FlexLayout>
          </DataText>
          <DataText area="liquidity">
            <VenusText>{item.liquidity}</VenusText>
          </DataText>
          <DataText area="Price">
            <VenusText>{item.price}</VenusText>
          </DataText>
        </DashGrid>
      </CustomLink>
    )
  }

  const MobileListItem = ({ item }) => {
    return (
      <CustomLink to={'market/' + item.name}>
        <FlexLayout justify="space-between" align="flex-start" padding="10px 0">
          <FlexLayout>
            <VenusIcon icon={item.icon} width="30px" height="30px" marginRight="8px" />
            <VenusText>{item.name}</VenusText>
          </FlexLayout>
          <FlexLayout direction="column" align="flex-end">
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.totalsupply.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.totalsupply.coin}</VenusText>
            </FlexLayout>
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.supplyapy.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.supplyapy.coin}</VenusText>
            </FlexLayout>
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.totalborrow.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.totalborrow.coin}</VenusText>
            </FlexLayout>
            <FlexLayout direction="column" align="flex-end">
              <VenusText>{item.borrowapy.dollar}</VenusText>
              <VenusText color={theme.colorSecondary}>{item.borrowapy.coin}</VenusText>
            </FlexLayout>
            <VenusText>{item.liquidity}</VenusText>
            <VenusText>{item.price}</VenusText>
          </FlexLayout>
        </FlexLayout>
      </CustomLink>
    )
  }

  return (
    <ListWrapper>
      <DashGrid header style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
        <Flex alignItems="center" justifyContent="flexStart">
        </Flex>

        <Flex alignItems="center">
          <ClickableText
            area="totalsupply"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.TOTALSUPPLY)
              setSortDirection(sortedColumn !== SORT_FIELD.TOTALSUPPLY ? true : !sortDirection)
            }}
          >
            Total Supply {sortedColumn === SORT_FIELD.TOTALSUPPLY ? (!sortDirection ? '↑' : '↓') : ''}
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
            Supply Apy
            {sortedColumn === SORT_FIELD.SUPPLYAPY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="totalborrow"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.TOTALBORROW)
              setSortDirection(sortedColumn !== SORT_FIELD.TOTALBORROW ? true : !sortDirection)
            }}
          >
            Total Borrow
            {sortedColumn === SORT_FIELD.TOTALBORROW ? (!sortDirection ? '↑' : '↓') : ''}
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
            Borrow APY
            {sortedColumn === SORT_FIELD.BORROWAPY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="liquidity"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.LIQUIDITY)
              setSortDirection(sortedColumn !== SORT_FIELD.LIQUIDITY ? true : !sortDirection)
            }}
          >
            Liquidity
            {sortedColumn === SORT_FIELD.LIQUIDITY ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
        <Flex alignItems="center">
          <ClickableText
            area="price"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.PRICE)
              setSortDirection(sortedColumn !== SORT_FIELD.PRICE ? true : !sortDirection)
            }}
          >
            Price
            {sortedColumn === SORT_FIELD.PRICE ? (!sortDirection ? '↑' : '↓') : ''}
          </ClickableText>
        </Flex>
      </DashGrid>
      <List p={0}>
        {filteredList &&
          filteredList.map((item, index) => {
            return (
              <div key={index}>
                {
                  !below960 && <ListItem key={index} item={item} />
                }
                {
                  below960 && <MobileListItem key={index} item={item} />
                }
              </div>
            )
          })}
      </List>
    </ListWrapper>
  )
}

export default withRouter(MarketList)
