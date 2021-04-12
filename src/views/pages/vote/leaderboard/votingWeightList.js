
import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
// import { useMedia } from 'react-use'
import { withRouter } from 'react-router-dom'

import theme from '../../../../theme'
import { VenusText, CustomLink, FlexLayout } from '../../../../components/styles'

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-areas: 'rank votes voteWeight proposalsVoted';
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
    }
  }

  @media screen and (min-width: 1080px) {
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-areas: 'rank votes voteWeight proposalsVoted';
  }
`

const ListWrapper = styled.div``

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

const ListItem = ({ item }) => {
  return (
    <CustomLink to={'/pages/vote/address/' + item.address}>
      <DashGrid>
        <DataText area="rank">
          <FlexLayout width="100%" justify="flex-start">
            <VenusText margin="0 10px 0 0">{item.rank}</VenusText>
            <VenusText>{item.address}</VenusText>
          </FlexLayout>
        </DataText>
        <DataText area="votes">
          <VenusText>{item.votes}</VenusText>
        </DataText>
        <DataText area="voteWeight">
          <VenusText>{item.voteWeight}</VenusText>
        </DataText>
        <DataText area="proposalsVoted">
          <VenusText>{item.proposalsVoted}</VenusText>
        </DataText>
      </DashGrid>
    </CustomLink>
  )
}

// @TODO rework into virtualized list
const VotingWeightList = ({ list }) => {
  // const below1080 = useMedia('(max-width: 1080px)')
  // const below680 = useMedia('(max-width: 680px)')
  // const below600 = useMedia('(max-width: 600px)')

  // useEffect(() => {
  // }, [tokens])

  return (
    <ListWrapper>
      <DashGrid header style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
        <Flex alignItems="center">
          <DataText area="rank">
            Rank
          </DataText>
        </Flex>
        <Flex alignItems="center">
          <DataText area="votes">
            Votes
          </DataText>
        </Flex>
        <Flex alignItems="center">
          <DataText area="voteWeight">
            Vote Weight
          </DataText>
        </Flex>
        <Flex alignItems="center">
          <DataText area="proposalsVoted">
            Proposals Voted
          </DataText>
        </Flex>
      </DashGrid>
      <List p={0}>
        {list &&
          list.map((item, index) => {
            return (
              <div key={index}>
                <ListItem key={index} item={item} />
              </div>
            )
          })}
      </List>
    </ListWrapper>
  )
}

export default withRouter(VotingWeightList)
