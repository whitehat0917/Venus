import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMedia } from 'react-use'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

import { 
  FlexLayout, 
  VenusText, 
  PageTitle, 
  Container,
  Divider
} from '../../../../components/styles';
import BackButton from '../../../../components/BackButton';
import { InfoDisplay } from './style';
import theme from '../../../../theme';
import ADA from '../../../../assets/img/icons/ada-icon.png'
import BCH from '../../../../assets/img/icons/bch-icon.png'
import BETH from '../../../../assets/img/icons/beth-icon.png'
import BNB from '../../../../assets/img/icons/bnb-icon.png'
import BTCB from '../../../../assets/img/icons/btcb-icon.png'
import BUSD from '../../../../assets/img/icons/busd-icon.png'
import DAI from '../../../../assets/img/icons/dai-icon.png'
import DOT from '../../../../assets/img/icons/dot-icon.png'
import ETH from '../../../../assets/img/icons/eth-icon.png'
import FIL from '../../../../assets/img/icons/fil-icon.png'
import LINK from '../../../../assets/img/icons/link-icon.png'
import LTC from '../../../../assets/img/icons/ltc-icon.png'
import SXP from '../../../../assets/img/icons/sxp-icon.png'
import USDC from '../../../../assets/img/icons/usdc-icon.png'
import USDT from '../../../../assets/img/icons/usdt-icon.png'
import XRP from '../../../../assets/img/icons/xrp-icon.png'
import XVS from '../../../../assets/img/icons/xvs-icon.png'
import VAI from '../../../../assets/img/dashboard/vai-icon.svg'
import VenusIcon from '../../../../components/VenusIcon';
import TabPane from 'reactstrap/lib/TabPane';

const supplyAPYData = [
  { name: "March 4, 2021 1:00 AM", APY: 1.57228382 },
  { name: "March 4, 2021 1:05 AM", APY: 1.48339944 },
  { name: "March 4, 2021 1:10 AM", APY: 1.60383822 },
  { name: "March 4, 2021 1:15 AM", APY: 1.56882373 },
  { name: "March 4, 2021 1:20 AM", APY: 1.52009834 },
  { name: "March 4, 2021 1:25 AM", APY: 1.40288832 },
  { name: "March 4, 2021 1:30 AM", APY: 1.37288402 },
  { name: "March 4, 2021 1:35 AM", APY: 1.61888323 },
  { name: "March 4, 2021 1:40 AM", APY: 1.50200344 },
  { name: "March 4, 2021 1:45 AM", APY: 1.63028834 },
  { name: "March 4, 2021 1:50 AM", APY: 1.32009344 },
  { name: "March 4, 2021 1:55 AM", APY: 1.48872093 },
  { name: "March 4, 2021 2:00 AM", APY: 1.50198983 },
  { name: "March 4, 2021 2:05 AM", APY: 1.31238452 },
  { name: "March 4, 2021 2:10 AM", APY: 1.57228382 },
  { name: "March 4, 2021 2:15 AM", APY: 1.42878832 },
  { name: "March 4, 2021 2:20 AM", APY: 1.51009833 },
  { name: "March 4, 2021 2:25 AM", APY: 1.60288342 },
  { name: "March 4, 2021 2:30 AM", APY: 1.58798283 },
  { name: "March 4, 2021 2:35 AM", APY: 1.52939843 },
  { name: "March 4, 2021 2:40 AM", APY: 1.57782342 },
  { name: "March 4, 2021 2:45 AM", APY: 1.52120344 },
  { name: "March 4, 2021 2:50 AM", APY: 1.48983482 },
  { name: "March 4, 2021 2:55 AM", APY: 1.49388923 },
  { name: "March 4, 2021 3:00 AM", APY: 1.54399234 },
  { name: "March 4, 2021 3:05 AM", APY: 1.57228382 },
  { name: "March 4, 2021 3:10 AM", APY: 1.48573443 },
  { name: "March 4, 2021 3:15 AM", APY: 1.52983442 },
  { name: "March 4, 2021 3:20 AM", APY: 1.57228382 },
  { name: "March 4, 2021 3:25 AM", APY: 1.48339944 },
  { name: "March 4, 2021 3:30 AM", APY: 1.60383822 },
  { name: "March 4, 2021 3:45 AM", APY: 1.56882373 },
  { name: "March 4, 2021 3:50 AM", APY: 1.52009834 },
  { name: "March 4, 2021 3:55 AM", APY: 1.40288832 },
  { name: "March 4, 2021 4:00 AM", APY: 1.37288402 },
  { name: "March 4, 2021 4:05 AM", APY: 1.61888323 },
  { name: "March 4, 2021 4:10 AM", APY: 1.50200344 },
  { name: "March 4, 2021 4:15 AM", APY: 1.63028834 },
  { name: "March 4, 2021 4:20 AM", APY: 1.32009344 },
  { name: "March 4, 2021 4:25 AM", APY: 1.48872093 },
  { name: "March 4, 2021 4:30 AM", APY: 1.50198983 },
  { name: "March 4, 2021 4:45 AM", APY: 1.01238452 },
  { name: "March 4, 2021 4:50 AM", APY: 1.57228382 },
  { name: "March 4, 2021 4:55 AM", APY: 1.42878832 },
  { name: "March 4, 2021 5:00 AM", APY: 1.51009833 },
  { name: "March 4, 2021 5:05 AM", APY: 1.60288342 },
  { name: "March 4, 2021 5:10 AM", APY: 1.58798283 },
  { name: "March 4, 2021 5:15 AM", APY: 1.52939843 },
  { name: "March 4, 2021 5:20 AM", APY: 1.57782342 },
  { name: "March 4, 2021 5:25 AM", APY: 1.52120344 },
  { name: "March 4, 2021 5:30 AM", APY: 1.48983482 },
  { name: "March 4, 2021 5:35 AM", APY: 1.49388923 },
  { name: "March 4, 2021 5:40 AM", APY: 1.54399234 },
  { name: "March 4, 2021 5:45 AM", APY: 1.57228382 },
  { name: "March 4, 2021 5:50 AM", APY: 1.48573443 },
  { name: "March 4, 2021 5:55 AM", APY: 1.52983442 },
  { name: "March 4, 2021 6:00 AM", APY: 1.57289384 }
];

const data = [
  { title: "Price", value: "$1.00015" },
  { title: "Market Liquidity", value: "136,168,146.04198627 BUSD" },
  { title: "# of Suppliers", value: "3,269" },
  { title: "# of Borrowers", value: "2,964" },
  { title: "Borrow Cap", value: "$483,522,391.1" },
  { title: "Interest Paid/Day", value: "$1,250.18" },
  { title: "Reserves", value: "229093.92961749 BUSD" },
  { title: "Reserve Factor", value: "10%" },
  { title: "Collateral Factor", value: "60%" },
  { title: "Total Supply", value: "$619,481,833.71" },
  { title: "Total Borrow", value: "$483,522,391.1" },
  { title: "vBUSD Minted", value: "30,427,900,315.82877467" },
  { title: "Exchange Rate", value: "1 BUSD = 49.125677 vBUSD" },
]

const rateData = []
for (let i = 0; i < 101; i ++) {
  rateData.push({percent: i, value1: i / 20, value2: i * i / 2000 - i / 200})
}

const Coin = ({coinType}) => {
  const below1440 = useMedia('(max-width: 1440px)')
  const below960 = useMedia('(max-width: 960px)')

  const [coinData, setCoinData] = useState({icon: BUSD, coin: "BUSD"})

  useEffect(() => {
    if (coinType) {
      setCoinData({
        icon: XVS,
        coin: coinType
      })
    }
  }, [coinType])

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro">{payload[0].value}</p>
          <p className="desc">{payload[1].value}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div>
      <PageTitle>
        <BackButton marginRight="12px" />
        Market
      </PageTitle>
      <Row>
        <Col md={below960 ? 12 : 4}>
          <Container style={{height: "calc(100% - 20px)"}}>
            <FlexLayout direction="column" align="flex-start" margin="0 0 10px 10px">
              <VenusIcon icon={coinData.icon} width="80px" height="80px"/>
              <VenusText fontSize="20px" padding="20px 0 40px 15px">{coinData.coin}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between" margin="0 0 40px 0">
              <InfoDisplay>
                <h6>Net Rate</h6>
                <p>4.43%</p>
              </InfoDisplay>
              <InfoDisplay align="right">
                <h6>Supply APY</h6>
                <p>2.77%</p>
              </InfoDisplay>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <InfoDisplay>
                <h6>Distribution APY</h6>
                <p>1.64%</p>
              </InfoDisplay>
              <InfoDisplay align="right">
                <h6>Total Supply APY</h6>
                <p>$621,696,482.3</p>
              </InfoDisplay>
            </FlexLayout>
          </Container>
        </Col>
        <Col md={below960 ? 12 : 8}>
          <Row>
            <Col md={12}>
              <Container>
                <Tabs>
                  <TabList>
                    <Tab className="no-background">Supply</Tab>
                    <Tab className="no-background">Borrow</Tab>
                  </TabList>
                  <TabPanel>
                    <VenusText fontSize="14px" align="right">APY</VenusText>
                    <div style={{height: "150px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={supplyAPYData} syncId="supply">
                          <defs>
                            <linearGradient id="greenColor" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#9dd562" stopOpacity={0.5}/>
                              <stop offset="100%" stopColor="#9dd562" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" />
                          <Tooltip contentStyle={{backgroundColor: 'transparent', border: '0'}} />
                          <Line type="monotone" dataKey="APY" stroke="url(#greenColor)" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div style={{height: "150px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={supplyAPYData} syncId="supply">
                          <XAxis dataKey="name" />
                          <Tooltip contentStyle={{backgroundColor: 'transparent', border: '0'}} />
                          <Bar dataKey="APY" fill="#252a4a" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <VenusText fontSize="14px" align="right">APY</VenusText>
                    <div style={{height: "150px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={supplyAPYData} syncId="borrow">
                          <defs>
                            <linearGradient id="redColor" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#f06517" stopOpacity={0.5}/>
                              <stop offset="100%" stopColor="#de4993" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" />
                          <Tooltip contentStyle={{backgroundColor: 'transparent', border: '0'}} />
                          <Line type="monotone" dataKey="APY" stroke="url(#redColor)" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div style={{height: "150px"}}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={supplyAPYData} syncId="borrow">
                          <XAxis dataKey="name" />
                          <Tooltip contentStyle={{backgroundColor: 'transparent', border: '0'}} />
                          <Bar dataKey="APY" fill="#252a4a" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabPanel>
                </Tabs>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col md={below1440 ? 12 : 6}>
              <Container>
                <FlexLayout direction="column" align="flex-start">
                  <InfoDisplay>
                    <h6>Interest Rate Model</h6>
                    <p>Utilization vs. APY</p>
                  </InfoDisplay>
                </FlexLayout>
                <div style={{height: "150px"}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={rateData}>
                      <defs>
                        <linearGradient id="redColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f06517" stopOpacity={0.5}/>
                          <stop offset="100%" stopColor="#de4993" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="greenColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9dd562" stopOpacity={0.5}/>
                          <stop offset="100%" stopColor="#9dd562" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="percent" />
                      <Tooltip 
                        content={<CustomTooltip />}
                      />
                      <Line type="monotone" dataKey="value1" stroke="url(#redColor)" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="value2" stroke="url(#greenColor)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Container>
            </Col>
            <Col md={below1440 ? 12 : 6}>
              <Container>
                {
                  data.map((item, index) => {
                    return (
                      <div key={index}>
                        {index != 0 && <Divider />}
                        <FlexLayout justify="space-between" padding="14px 0">
                          <VenusText fontSize="16px">{item.title}</VenusText>
                          <VenusText fontSize="16px">{item.value}</VenusText>
                        </FlexLayout>
                      </div>
                    )
                  })
                }
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Coin;
