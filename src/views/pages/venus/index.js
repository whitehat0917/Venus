import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { useMedia } from 'react-use'

import { 
  FlexLayout, 
  VenusText, 
  PageTitle, 
  Container,
} from '../../../components/styles';
import CopyHelper from '../../../components/Copy';
import VenusIcon from '../../../components/VenusIcon';
import VenusProgress from '../../../components/Progress';
import VenusList from '../../../components/VenusList';
import { InfoDisplay } from './style';

import xvsIcon from '../../../assets/img/active-xvs.svg'
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
    icon: XVS,
    name: "XVS",
    perday: "2999.99",
    supplyapy: "13.08%",
    borrowapy: "236.31%",
  },
  {
    icon: BNB,
    name: "BNB",
    perday: "2999.99",
    supplyapy: "4.01%",
    borrowapy: "9.72%",
  },
  {
    icon: BTCB,
    name: "BTCB",
    perday: "2999.99",
    supplyapy: "2.12%",
    borrowapy: "7.38%",
  },
  {
    icon: ETH,
    name: "ETH",
    perday: "1500",
    supplyapy: "2.36%",
    borrowapy: "6.57%",
  },
  {
    icon: USDT,
    name: "USDT",
    perday: "1250",
    supplyapy: "1.77%",
    borrowapy: "2.35%",
  },
  {
    icon: BUSD,
    name: "BUSD",
    perday: "1250",
    supplyapy: "1.65%",
    borrowapy: "2.17%",
  },
  {
    icon: VAI,
    name: "VAI",
    perday: "1250",
    supplyapy: "16.77%",
    borrowapy: "-",
  },
  {
    icon: SXP,
    name: "SXP",
    perday: "1007.71",
    supplyapy: "3.95%",
    borrowapy: "236.31%",
  },
  {
    icon: USDC,
    name: "USDC",
    perday: "999.99",
    supplyapy: "1.44%",
    borrowapy: "2.07%",
  },
  {
    icon: BETH,
    name: "BETH",
    perday: "274.83",
    supplyapy: "3.58%",
    borrowapy: "9.06%",
  },
  {
    icon: DAI,
    name: "DAI",
    perday: "150",
    supplyapy: "0.69%",
    borrowapy: "0.98%",
  },
  {
    icon: ADA,
    name: "ADA",
    perday: "150",
    supplyapy: "1.17%",
    borrowapy: "6.77%",
  },
  {
    icon: DOT,
    name: "DOT",
    perday: "146.57",
    supplyapy: "0.87%",
    borrowapy: "2.89%",
  },
  {
    icon: LTC,
    name: "LTC",
    perday: "91.61",
    supplyapy: "2.44%",
    borrowapy: "7.33%",
  },
  {
    icon: XRP,
    name: "XRP",
    perday: "91.61",
    supplyapy: "3.51%",
    borrowapy: "11.09%",
  },
  {
    icon: LINK,
    name: "LINK",
    perday: "91.61",
    supplyapy: "1.16%",
    borrowapy: "3.51%",
  },
  {
    icon: BCH,
    name: "BCH",
    perday: "18.32",
    supplyapy: "0.95%",
    borrowapy: "12.43%",
  },
  {
    icon: FIL,
    name: "FIL",
    perday: "18.32",
    supplyapy: "1.15%",
    borrowapy: "6.44%",
  },
]

const Venus = () => {
  const below1080 = useMedia('(max-width: 1080px)')

  const address = "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63"

  return (
    <div>
      <PageTitle>
        User Distribution
      </PageTitle>
      <Row>
        <Col md={below1080 ? 12 : 6}>
          <FlexLayout justify={below1080 ? "center" : "flex-start"} padding="20px 0">
            <VenusIcon icon={xvsIcon} width="24px" height="24px" marginRight="8px" />
            <VenusText>{address}</VenusText>
            <CopyHelper toCopy={address} />
          </FlexLayout>
        </Col>
        <Col md={below1080 ? 12 : 6}>
          <FlexLayout align={below1080 ? "center": "flex-end"} direction="column" margin="0 20px 0 0" padding="20px 0">
            <FlexLayout justify="space-between">
              <InfoDisplay style={{marginRight: "15px"}}>
                <h6>Daily Distribution</h6>
                <p>17,290.58</p>
              </InfoDisplay>
              <InfoDisplay>
                <h6>Remaining</h6>
                <p>21,038,479.68</p>
              </InfoDisplay>
            </FlexLayout>
            <VenusProgress percent={10} width="250px"></VenusProgress>
          </FlexLayout>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Container>
            <VenusText fontSize="20px" align="left" margin="0 0 2rem 0">Market Distribution</VenusText>
            <VenusList tokens={DataList} />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Venus;
