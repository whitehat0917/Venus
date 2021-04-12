import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { User } from 'react-feather'
import { useMedia } from 'react-use'

import TransactionList from './transactionList'
import VotingList from './votingList'
import {
  FlexLayout,
  VenusText,
  PageTitle,
  Container,
  Divider,
  BscScanLink,
  CircleDiv,
} from '../../../../components/styles';
import { Address, ExternalAddress } from './style'
import BackButton from '../../../../components/BackButton';
import CopyHelper from '../../../../components/Copy'
import VenusProgress from '../../../../components/Progress';
import theme from '../../../../theme';
import VenusIcon from '../../../../components/VenusIcon';
import gotoIcon from '../../../../assets/img/icons/goto.svg'
import upArrowIcon from '../../../../assets/img/green-arrow.svg';
import downArrowIcon from '../../../../assets/img/red-arrow.svg';

const proposalData = {
  title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
  number: 2,
  date1: "February 23rd, 2021",
  status1: "Defeated",
  date2: "February 26, 2021",
  status2: "Failed",
}

const historyData = [
  { label: "Created", date: "March 9, 2021 3:58 AM" },
  { label: "Active", date: "March 9, 2021 3:58 AM" },
  { label: "Succeed", date: "March 12, 2021 4:03 AM" },
  { label: "Queue", date: "March 14, 2021 4:05 AM" },
  { label: "Executed", date: "March 14, 2021 4:05 AM" },
]

const votesData = [
  { address: "0x1ca...6d7e", votes: "600,052.08074395" },
  { address: "0xcb5...23b5", votes: "268.09588612" },
  { address: "0x8e9...c33e", votes: "123.38467731" },
  { address: "0x2ac...8445", votes: "63.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
  { address: "0x1ca...6d7e", votes: "60,052.08074395" },
  { address: "0xcb5...23b5", votes: "28.09588612" },
  { address: "0x8e9...c33e", votes: "13.38467731" },
  { address: "0x2ac...8445", votes: "3.32671619" },
]

const transactionData = [
  { action: 'Received Votes', age: '10 days, 20 hrs ago', icon: upArrowIcon, result: '0.0059' },
  { action: 'Received Votes', age: '10 days, 23 hrs ago', icon: upArrowIcon, result: '9.0908' },
  { action: 'Lost Votes', age: '11 days, 1 hrs ago', icon: downArrowIcon, result: '1.0119' },
  { action: 'Received Votes', age: '11 days, 1 hrs ago', icon: upArrowIcon, result: '0.0017' }
]

const votingData = [
  { id: 1, title: 'VIP-3 Venus Protocol Co...', subTitle: '3 Executed january 24th, 2021', status: 'Passed', greenAmount: '100', purpleAmount: '0', iconValue: 0 },
  { id: 1, title: 'VIP-3 Venus Protocol Co...', subTitle: '3 Executed january 24th, 2021', status: 'Passed', greenAmount: '100', purpleAmount: '0', iconValue: 1 },
  { id: 1, title: 'VIP-3 Venus Protocol Co...', subTitle: '3 Executed january 24th, 2021', status: 'Passed', greenAmount: '100', purpleAmount: '10', iconValue: 0 },
  { id: 1, title: 'VIP-3 Venus Protocol Co...', subTitle: '3 Executed january 24th, 2021', status: 'Canceled', greenAmount: '80', purpleAmount: '50', iconValue: 0 },
]

// const HistoryItem = ({item}) => {
//   return (
//     <FlexLayout>
//       <CircleDiv backgroundColor={theme.colorDarkGreen} width="22px" height="22px">
//         <Check size={10}></Check>
//       </CircleDiv>
//       <FlexLayout direction="column" align="flex-start" padding="10px" style={{flex: "1"}}>
//         <VenusText>{item.label}</VenusText>
//         <VenusText color={theme.colorSecondary}>{item.date}</VenusText>
//       </FlexLayout>
//     </FlexLayout>
//   )
// }

// const HistoryList = ({list}) => {
//   return (
//     <FlexLayout padding="20px 0" direction="column">
//       {
//         list.map((item, index) => {
//           return (
//             <HistoryItem key={index} item={item}></HistoryItem>
//           )
//         })
//       }
//     </FlexLayout>
//   )
// }

// const VoteItem = ({item}) => {
//   return (
//     <FlexLayout justify="space-between" height="46px" borderBottom={`1px solid ${theme.bgActive}`} borderTop={`1px solid ${theme.bgActive}`}>
//       <VenusText>{item.address}</VenusText>
//       <VenusText>{item.votes}</VenusText>
//     </FlexLayout>
//   )
// }

// const VoteList = ({list}) => {
//   return (
//     <FlexLayout direction="column">
//       {
//         list.map((item, index) => {
//           return (
//             <VoteItem item={item}></VoteItem>
//           )
//         })
//       }
//     </FlexLayout>
//   )
// }

const Details = ({ address }) => {
  const below1440 = useMedia('(max-width: 1440px)')
  const below960 = useMedia('(max-width: 960px)')

  return (
    <div>
      <PageTitle>
        <BackButton marginRight="12px" />
        Details
      </PageTitle>
      <Row>
        <Col md={below1440 ? 12 : 5}>
          <Container>
            <FlexLayout direction="column" align="flex-start">
              <VenusText fontSize="17px" fontWeight="900" margin="0 0 5px 0">0x1c...6d7e</VenusText>
              <FlexLayout justify="space-between" align="center" width="100%">
                <Address to={{ pathname: "https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" }} target="_blank">
                  0x1ca3ac3686071be692be7f1fbecd668641476d7e
                </Address>
                <CopyHelper toCopy={address} />
              </FlexLayout>
            </FlexLayout>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={below960 ? 12 : 5}>
          <Container>
            <VenusText fontSize="17px" fontWeight="900" margin="0 0 25px 0" align="left">
              Holding
            </VenusText>
            <Divider />
            <FlexLayout padding="20px 0 30px 0" direction="column" align="flex-start">
              <VenusText fontSize="16px" fontWeight="normal" color={theme.colorSecondary} margin="0 0 10px 0">
                Venus Balance
              </VenusText>
              <VenusText fontSize="20px" fontWeight="700">
                0
              </VenusText>
            </FlexLayout>
            <Divider />
            <FlexLayout padding="20px 0 30px 0" direction="column" align="flex-start">
              <FlexLayout justify="space-between" align="flex-start" margin="0 0 10px 0">
                <FlexLayout direction="column" align="flex-start">
                  <VenusText fontSize="16px" fontWeight="normal" color={theme.colorSecondary} margin="0 0 10px 0">
                    Votes
                  </VenusText>
                  <VenusText fontSize="20px" fontWeight="900">
                    600,267.4176
                  </VenusText>
                </FlexLayout>
                <FlexLayout justify="flex-end" margin="0 0 10px 0">
                  <User />
                  <VenusText margin="0 20px">132</VenusText>
                </FlexLayout>
              </FlexLayout>
              <VenusProgress percent={100} width="100%"></VenusProgress>
            </FlexLayout>
            <Divider />
            <FlexLayout padding="20px 0 30px 0" direction="column" align="flex-start">
              <VenusText fontSize="16px" fontWeight="normal" color={theme.colorSecondary} margin="0 0 10px 0">
                Delegating To
              </VenusText>
              <VenusText fontSize="20px" fontWeight="900">
                Undelegated
              </VenusText>
            </FlexLayout>
          </Container>
        </Col>
        <Col md={below960 ? 12 : 7}>
          <Container>
            <VenusText fontSize="17px" fontWeight="900" margin="0 0 25px 0" align="left">
              Transactions
            </VenusText>
            <Divider />
            <TransactionList tokens={transactionData} />
            <ExternalAddress href='https://bscscan.com/address/0x1ca3ac3686071be692be7f1fbecd668641476d7e' target='blank'>VIEW MORE</ExternalAddress>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <Container>
            <VenusText fontSize="17px" fontWeight="900" margin="0 0 25px 0" align="left">
              Voting History
            </VenusText>
            <Divider />
            <VotingList tokens={votingData} />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Details;
