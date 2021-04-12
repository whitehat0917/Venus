import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { List, User } from 'react-feather'

import {
  FlexLayout,
  VenusText,
  PageTitle,
  Container,
  Divider,
  BscScanLink,
  CircleDiv,
} from '../../../../components/styles'
import theme from '../../../../theme'
import VotingWeightList from './votingWeightList'


const list = [
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
  {rank: "1", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "600,228.81830817", voteWeight: "99.33%", proposalsVoted: "8"},
  {rank: "2", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "9.33%", proposalsVoted: "5"},
  {rank: "3", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "465.30670979", voteWeight: "9.3%", proposalsVoted: "6"},
  {rank: "4", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "352.62582286", voteWeight: "0.33%", proposalsVoted: "7"},
  {rank: "5", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "60,228.81830817", voteWeight: "0.09%", proposalsVoted: "4"},
  {rank: "6", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "6,228.81830817", voteWeight: "0.06%", proposalsVoted: "2"},
  {rank: "7", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "228.81830817", voteWeight: "0.05%", proposalsVoted: "3"},
  {rank: "8", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "558.90518019", voteWeight: "0.04%", proposalsVoted: "2"},
  {rank: "9", address: "0x1ca3ac3686071be692be7f1fbecd668641476d7e", votes: "58.90518019", voteWeight: "0.02%", proposalsVoted: "1"},
]

const Leaderboard = ({ address }) => {

  return (
    <div>
      <PageTitle>
        Leaderboard
      </PageTitle>
      <Row>
        <Col md={12}>
          <Container>
            <VenusText fontWeight="600" fontSize="20px" margin="0 0 40px 0" align="left">Addresses by Voting Weight</VenusText>
            <VotingWeightList list={list} />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Leaderboard;
