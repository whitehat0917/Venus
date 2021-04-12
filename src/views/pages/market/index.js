import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { useMedia } from 'react-use'

import { 
  FlexLayout, 
  VenusText, 
  PageTitle, 
  Container,
  Divider
} from '../../../components/styles';
import VenusIcon from '../../../components/VenusIcon';
import { TotalInfo, InfoDisplay } from './style';
import MarketList from '../../../components/MarketList'
import theme from '../../../theme';

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
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dollar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dollar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: BNB,
    name: "BNB",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: BTCB,
    name: "BTCB",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: ETH,
    name: "ETH",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: USDT,
    name: "USDT",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: BUSD,
    name: "BUSD",
    totalsupply: {
      dollar: "1250",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$1"
  },
  {
    icon: VAI,
    name: "VAI",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: SXP,
    name: "SXP",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: USDC,
    name: "USDC",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: BETH,
    name: "BETH",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: DAI,
    name: "DAI",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: ADA,
    name: "ADA",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: DOT,
    name: "DOT",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: LTC,
    name: "LTC",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: XRP,
    name: "XRP",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: LINK,
    name: "LINK",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: BCH,
    name: "BCH",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
  {
    icon: FIL,
    name: "FIL",
    totalsupply: {
      dollar: "$203.58M",
      coin: "4,451,811 XVS"
    },
    supplyapy: {
      dollar: "13.32%",
      coin: "13.08%"
    },
    totalborrow: {
      dolloar: "$20.6M",
      coin: "737, 965 XVS"
    },
    borrowapy: {
      dolloar: "9%",
      coin: "3.55%"
    },
    liquidity: "$872.24M",
    price: "$45.73"
  },
]

const Market = () => {
  const below1440 = useMedia('(max-width: 1440px)')

  const address = "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63"


  return (
    <div>
      <PageTitle>
        All Markets
      </PageTitle>
      <Row>
        <Col md="12">
          <Container padding="10px 20px">
            <TotalInfo>
              <FlexLayout justify="space-between" backgroundColor={theme.bgMain} padding="20px 30px" borderRadius="20px" className="supply-board">
                <InfoDisplay style={{marginRight: "15px"}}>
                  <h4>Total Supply</h4>
                  <p>$5,346,395,071.53</p>
                </InfoDisplay>
                <InfoDisplay style={{marginRight: "15px"}}>
                  <h4>Totoal Borrow</h4>
                  <p>$2,487,512,302.74</p>
                </InfoDisplay>
                <InfoDisplay style={{marginRight: "15px"}}>
                  <h4>Available Liquidity</h4>
                  <p>$2,861,680,470.35</p>
                </InfoDisplay>
              </FlexLayout>
              <VenusText fontWeight="bold" fontSize="18px" color={theme.textGreen} align="left" margin="20px 0">
                VAI Staking APY: 17.11%
              </VenusText>
              <Divider />
            </TotalInfo>
            <MarketList tokens={DataList} />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Market;
