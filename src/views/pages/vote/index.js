import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import { useMedia } from 'react-use'

import {
  FlexLayout,
  VenusText,
  PageTitle,
  Container,
  BscScanLink,
  Divider,
  CircleDiv
} from '../../../components/styles';
import Modal from './modal'
import ProposalList from '../../../components/ProposalList';
import VenusIcon from '../../../components/VenusIcon';
import VenusButton from '../../../components/VenusButton';
import { InfoDisplay } from './style';
import theme from '../../../theme';

import xvsIcon from '../../../assets/img/active-xvs.svg'
import gotoIcon from '../../../assets/img/icons/goto.svg'
import ADA from '../../../assets/img/icons/ada-icon.png'
import BCH from '../../../assets/img/icons/bch-icon.png'
import BETH from '../../../assets/img/icons/beth-icon.png'
import BNB from '../../../assets/img/icons/bnb-icon.png'
import BTCB from '../../../assets/img/icons/btcb-icon.png'
import BUSD from '../../../assets/img/icons/busd-icon.png'
import DAI from '../../../assets/img/icons/dai-icon.png'
import DOT from '../../../assets/img/icons/dot-icon.png'
import ETH from '../../../assets/img/icons/eth-icon.png'
import FIL from '../../../assets/img/icons/fil-icon.png'
import LINK from '../../../assets/img/icons/link-icon.png'
import LTC from '../../../assets/img/icons/ltc-icon.png'
import SXP from '../../../assets/img/icons/sxp-icon.png'
import USDC from '../../../assets/img/icons/usdc-icon.png'
import USDT from '../../../assets/img/icons/usdt-icon.png'
import XRP from '../../../assets/img/icons/xrp-icon.png'
import XVS from '../../../assets/img/icons/xvs-icon.png'
import VAI from '../../../assets/img/dashboard/vai-icon.svg'

const DataList = [
  {
    title: "VIP-11 Update Stablecoins Interest Rate Model",
    number: 11,
    date1: "March 9th, 2021",
    status1: "Executed",
    date2: "March 14, 2021",
    status2: "Passed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 10,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
  {
    title: "VIP-11 Update Stablecoins Interest Rate Model",
    number: 9,
    date1: "March 9th, 2021",
    status1: "Executed",
    date2: "March 14, 2021",
    status2: "Passed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 8,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
  {
    title: "VIP-11 Update Stablecoins Interest Rate Model",
    number: 7,
    date1: "March 9th, 2021",
    status1: "Executed",
    date2: "March 14, 2021",
    status2: "Passed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 6,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
  {
    title: "VIP-11 Update Stablecoins Interest Rate Model",
    number: 5,
    date1: "March 9th, 2021",
    status1: "Executed",
    date2: "March 14, 2021",
    status2: "Passed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 4,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
  {
    title: "VIP-11 Update Stablecoins Interest Rate Model",
    number: 3,
    date1: "March 9th, 2021",
    status1: "Executed",
    date2: "March 14, 2021",
    status2: "Passed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 2,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
  {
    title: "VIP-10 Increase Qualifed Asset's Borrow Factor",
    number: 1,
    date1: "February 23rd, 2021",
    status1: "Defeated",
    date2: "February 26, 2021",
    status2: "Failed",
  },
]

const Vote = () => {
  const below1080 = useMedia('(max-width: 1080px)')

  const [openModal, setOpenModal] = useState(false)

  const handleModalToggle = () => {
    setOpenModal(!openModal);
  }

  const handleClick = () =>{
    setOpenModal(!openModal);
  }

  return (
    <div>
      <Modal modal={openModal} toggle={handleModalToggle} />
      <PageTitle>
        All Markets
      </PageTitle>
      <Row>
        <Col md={below1080 ? 12 : 5}>
          <Container height="100px" padding="0 15px" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FlexLayout justify="space-between" width="100%">
              <FlexLayout justify="flex-start" align="center">
                <VenusIcon icon={xvsIcon} width="24px" height="24px" marginRight="8px" />
                <VenusText fontSize="17px">0.00000000</VenusText>
              </FlexLayout>
              <FlexLayout justify="flex-end">
                <BscScanLink to={{ pathname: "https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" }} target="_blank">
                  0x0B...4F13
                </BscScanLink>
                <BscScanLink to={{ pathname: "https://bscscan.com/address/0x0BF82CE1BDE549DaFadae4472b3398dd70E94F13" }} target="_blank">
                  <CircleDiv transform="rotate(-45deg)" margin="0 0 0 15px">
                    <VenusIcon icon={gotoIcon} width="14px" height="14px" />
                  </CircleDiv>
                </BscScanLink>
              </FlexLayout>
            </FlexLayout>
          </Container>
        </Col>
        <Col md={below1080 ? 12 : 5}>
          <Container backgroundColor={theme.colorYellow} height="100px" padding="0 15px" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FlexLayout>
              <InfoDisplay titleColor={theme.colorWhite} titleFontSize="20px" preColor={theme.colorWhite} sufColor={theme.colorBlack}>
                <h4>Voting Weight</h4>
                <p>0.0000<span>0000</span></p>
              </InfoDisplay>
            </FlexLayout>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={below1080 ? 12 : 5}>
          <Container>
            <FlexLayout padding="0 0 20px 33px" justify="flex-start">
              <VenusText fontSize="17px" align="left" >Voting Wallet</VenusText>
            </FlexLayout>
            <FlexLayout justify="flex-start" align="flex-end" margin="20px 0">
              <VenusIcon icon={xvsIcon} width="25px" height="25px" marginRight="8px" />
              <InfoDisplay>
                <h4>Venus Balance</h4>
                <p>0.0000<span>0000</span></p>
              </InfoDisplay>
            </FlexLayout>
            <Divider />
            <FlexLayout justify="space-between" margin="15px 0">
              <FlexLayout direction="column">
                <FlexLayout justify="flex-start" align="flex-end" margin="15px 0">
                  <VenusIcon icon={xvsIcon} width="25px" height="25px" marginRight="8px" />
                  <InfoDisplay>
                    <h4>Venus Earned</h4>
                    <p>0.0000<span>0000</span></p>
                  </InfoDisplay>
                </FlexLayout>
                <FlexLayout justify="flex-start" align="flex-end" margin="15px 0">
                  <VenusIcon icon={xvsIcon} width="25px" height="25px" marginRight="8px" />
                  <InfoDisplay>
                    <h4>VAI Mint Earned</h4>
                    <p>0.0000<span>0000</span></p>
                  </InfoDisplay>
                </FlexLayout>
              </FlexLayout>
              <VenusText color={theme.colorOrange} fontSize="16px" style={{ cursor: "pointer" }}>Collect</VenusText>
            </FlexLayout>
            <Divider />
            <FlexLayout direction="column" padding="30px 30px 10px 33px" align="flex-start">
              <VenusText fontSize="18px" fontWeight="900" margin="0 0 30px 0" align="left">Setup Voting</VenusText>
              <VenusText fontSize="16px" color={theme.colorSecondary} align="left" fontWeight="400">
                You can either vote on each proposal yourself or delegate your votes to a third party. Venus Governance puts you in charge of the future of Venus.
              </VenusText>
              <FlexLayout margin="30px 0 0 0" width="100%">
                <VenusButton text="Get Started" width="50%" height="46px" handleClick={handleClick} />
              </FlexLayout>
            </FlexLayout>
          </Container>
        </Col>
        <Col md={below1080 ? 12 : 7}>
          <Container>
            <FlexLayout justify="space-between" margin="0 0 30px 0">
              <VenusText fontSize="17px" fontWeight="900">Governance Proposals</VenusText>
              <VenusButton text="Create Proposal" width="150px" height="40px"></VenusButton>
            </FlexLayout>
            <ProposalList tokens={DataList} />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Vote;
