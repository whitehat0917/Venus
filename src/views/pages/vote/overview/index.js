import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Check } from 'react-feather'
import { useMedia } from 'react-use'

import {
  FlexLayout,
  VenusText,
  PageTitle,
  Container,
  Divider,
  BscScanLink,
  CircleDiv,
  CustomLink
} from '../../../../components/styles';
import { Address } from './style'
import BackButton from '../../../../components/BackButton';
import VenusProgress from '../../../../components/Progress';
import theme from '../../../../theme';
import VenusIcon from '../../../../components/VenusIcon';
import gotoIcon from '../../../../assets/img/icons/goto.svg'



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

const HistoryItem = ({ item }) => {
  return (
    <FlexLayout padding="10px 0" align="flex-start">
      <CircleDiv backgroundColor={theme.colorDarkGreen} width="22px" height="22px" margin="5px 0 0 0">
        <Check size={10}></Check>
      </CircleDiv>
      <FlexLayout padding="0 10px" direction="column" align="flex-start" style={{ flex: "1" }}>
        <VenusText>{item.label}</VenusText>
        <VenusText color={theme.colorSecondary}>{item.date}</VenusText>
      </FlexLayout>
    </FlexLayout>
  )
}

const HistoryList = ({ list }) => {
  return (
    <FlexLayout padding="20px 0" direction="column" align="flex-start">
      {
        list.map((item, index) => {
          return (
            <HistoryItem key={index} item={item}></HistoryItem>
          )
        })
      }
    </FlexLayout>
  )
}

const VoteItem = ({ item }) => {
  return (
    <FlexLayout justify="space-between" width="100%" minHeight="46px" borderBottom={`1px solid ${theme.bgActive}`} borderTop={`1px solid ${theme.bgActive}`}>
      <Address to={'/pages/vote/address/' + item.address}>{item.address}</Address>
      <VenusText>{item.votes}</VenusText>
    </FlexLayout>
  )
}

const VoteList = ({ list }) => {
  const [tempList, setTempList] = useState(list.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setTempList(list);
    setShowAll(true);
  }
  return (
    <FlexLayout direction="column">
      <FlexLayout direction="column" width="100%" maxHeight="300px" overflow="hidden scroll" justify='flex-start' wrap='nowrap'>
        {
          tempList.map((item, index) => {
            return (
              <VoteItem key={index} item={item}></VoteItem>
            )
          })
        }
      </FlexLayout>
      {
        showAll === false &&
        <VenusText padding="10px 0 0 0" cursor="pointer" onClick={() => handleShowAll()}>View all</VenusText>
      }
    </FlexLayout>
  )
}

const Overview = ({ proposalId }) => {
  const below1440 = useMedia('(max-width: 1440px)')
  const below960 = useMedia('(max-width: 960px)')

  const getColor = (status) => {
    if (status == "Passed")
      return theme.colorDarkGreen
    else if (status == "Failed")
      return theme.colorWhite
    else if (status == "Canceled")
      return theme.colorOrange
  }

  return (
    <div>
      <PageTitle>
        <BackButton marginRight="12px" />
        Overview
      </PageTitle>
      <Row>
        <Col md={below1440 ? 12 : 9}>
          <Row style={{ marginBottom: "25px" }}>
            <Col md={below960 ? 12 : 6}>
              <FlexLayout direction="column" align="flex-start" padding="0 0 20px 0">
                <VenusText fontSize="20px" fontWeight="900" margin="0 0 30px 0" align="left">Governance</VenusText>
                <VenusText fontSize="22px" fontWeight="600" margin="0 0 18px 0" align="left">{proposalData.title}</VenusText>
                <FlexLayout justify="space-between">
                  <VenusText color={theme.colorSecondary}>{proposalData.date1}</VenusText>
                  <VenusText
                    margin="0 10px"
                    color={getColor(proposalData.status2)}
                  >
                    {proposalData.status2}
                  </VenusText>
                  <VenusText color={theme.colorSecondary}>{proposalData.date2}</VenusText>
                </FlexLayout>
              </FlexLayout>
            </Col>
            <Col md={below960 ? 12 : 6}>
              <Container>
                <FlexLayout justify="flex-start">
                  <BscScanLink to={{ pathname: "https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" }} target="_blank">
                    0x0B...4F13
                  </BscScanLink>
                  <BscScanLink to={{ pathname: "https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" }} target="_blank">
                    <CircleDiv transform="rotate(-45deg)" margin="0 0 0 15px">
                      <VenusIcon icon={gotoIcon} width="14px" height="14px" />
                    </CircleDiv>
                  </BscScanLink>
                </FlexLayout>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={below960 ? 12 : 6}>
              <Container>
                <FlexLayout justify="space-between" margin="0 0 25px 0">
                  <VenusText fontSize="17px" fontWeight="900">For</VenusText>
                  <VenusText fontSize="17px" fontWeight="900">600,844.39172501</VenusText>
                </FlexLayout>
                <FlexLayout margin="0 0 25px 0">
                  <VenusProgress percent={100} width="100%" progressColor={theme.colorDarkGreen}></VenusProgress>
                </FlexLayout>
                <FlexLayout justify="space-between" margin="0 0 10px 0">
                  <VenusText color={theme.colorSecondary}>130 addresses</VenusText>
                  <VenusText color={theme.colorSecondary}>Votes</VenusText>
                </FlexLayout>
                <VoteList list={votesData}></VoteList>
              </Container>
            </Col>
            <Col md={below960 ? 12 : 6}>
              <Container>
                <FlexLayout justify="space-between" margin="0 0 78px 0">
                  <VenusText fontSize="17px" fontWeight="900">Against</VenusText>
                  <VenusText fontSize="17px" fontWeight="900">48.56349297</VenusText>
                </FlexLayout>
                <FlexLayout justify="space-between" margin="0 0 10px 0">
                  <VenusText color={theme.colorSecondary}>8 addresses</VenusText>
                  <VenusText color={theme.colorSecondary}>Votes</VenusText>
                </FlexLayout>
                <VoteList list={votesData}></VoteList>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Container>
                <FlexLayout padding="10px 0" direction="column" align="flex-start">
                  <VenusText fontSize="20px" fontWeight="900">Operation</VenusText>
                  <VenusText color={theme.colorSecondary}>_setInterestRateModel(address)</VenusText>
                  <VenusText color={theme.colorSecondary}>_setInterestRateModel(address)</VenusText>
                  <VenusText color={theme.colorSecondary}>_setInterestRateModel(address)</VenusText>
                </FlexLayout>
                <FlexLayout padding="10px 0" direction="column" align="flex-start">
                  <VenusText fontSize="20px" fontWeight="900">Description</VenusText>
                  <div>
                    <h2>VIP-11 Update Stablecoins Interest Rate</h2>
                    <h3>Model</h3>
                    <h4>Summary</h4>
                    <p>Due to recent market conditions, we have proposed a new upgradable interest rate model contract based on the new JumpRateModel. This proposal updates the vUSDT, vUSDC, vBUSD interest rate model to a recently deployed JumpRateModel with the parameters for stablecoins liquidity:</p>
                    <ul>
                      <li>0% base rate (current 2%)</li>
                      <li>4.07% borrow rate at kink (current 22%)</li>
                      <li>Kink at 80% utilization (current 90%)</li>
                      <li>29.33% borrow rate at 100% utilization (current 49%)</li>
                    </ul>
                    <p>This proposal begins the effort of setting a standardized interest rate model for all stablecoins on Venus.</p>
                    <a href="https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" target="_blank">New interest rate model contract</a>
                  </div>
                </FlexLayout>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col md={below1440 ? 12 : 3}>
          <Container>
            <VenusText align="left" fontSize="17px" fontWeight="900">Proposal history</VenusText>
            <HistoryList list={historyData}></HistoryList>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Overview;
