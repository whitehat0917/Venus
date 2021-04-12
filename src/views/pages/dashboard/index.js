import React, { useState, useEffect } from 'react'
import { Row, Col, Progress } from 'reactstrap';
import { connect } from "react-redux";
import { setTokenData } from "../../../redux/actions";
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip
} from "recharts";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import DropDownMenu from '../../../components/dropdown'
import Switch from '../../../components/switch'
import DashboardList from './list'
import InputBox from './inputbox'
import MintCard from './mintCard'
import { FlexLayout, VenusText, PageTitle, Container } from '../../../components/styles';

import xvsIcon from '../../../assets/img/dashboard/xvs-icon.png';
import vaiIcon from '../../../assets/img/dashboard/vai-icon.svg';
import plusYellowIcon from '../../../assets/img/dashboard/plus-yellow-icon.svg';
import plusGreenIcon from '../../../assets/img/dashboard/plus-green-icon.svg';
import arrowIcon from '../../../assets/img/dashboard/arrow.svg';
import upArrowIcon from '../../../assets/img/green-arrow.svg';
import downArrowIcon from '../../../assets/img/red-arrow.svg';
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

import currencyList from '../../../constants/currencyList';

const Dashboard = ({ tokenData, setTokenData }) => {
  const marketDataList = [
    {
      icon: SXP,
      name: "SXP",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 SXP",
      mode: '',
      switch: false
    },
    {
      icon: USDC,
      name: "USDC",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 USDC",
      mode: '',
      switch: false
    },
    {
      icon: XVS,
      name: "XVS",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 XVS",
      mode: '',
      switch: false
    },
    {
      icon: BNB,
      name: "BNB",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BNB",
      mode: 'supply',
      switch: false
    },
    {
      icon: BTCB,
      name: "BTCB",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BTCB",
      mode: '',
      switch: false
    },
    {
      icon: ETH,
      name: "ETH",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 ETH",
      mode: '',
      switch: false
    },
    {
      icon: USDT,
      name: "USDT",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 USDT",
      mode: 'supply',
      switch: false
    },
    {
      icon: BUSD,
      name: "BUSD",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BUSD",
      mode: '',
      switch: false
    },
    {
      icon: VAI,
      name: "VAI",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 VAI",
      mode: '',
      switch: false
    },
    {
      icon: BETH,
      name: "BETH",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BETH",
      mode: '',
      switch: false
    },
    {
      icon: DAI,
      name: "DAI",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 DAI",
      mode: '',
      switch: false
    },
    {
      icon: ADA,
      name: "ADA",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 ADA",
      mode: '',
      switch: false
    },
    {
      icon: DOT,
      name: "DOT",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 DOT",
      mode: '',
      switch: false
    },
    {
      icon: LTC,
      name: "LTC",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 LTC",
      mode: '',
      switch: false
    },
    {
      icon: XRP,
      name: "XRP",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 XRP",
      mode: '',
      switch: false
    },
    {
      icon: LINK,
      name: "LINK",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 LINK",
      mode: '',
      switch: false
    },
    {
      icon: BCH,
      name: "BCH",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BCH",
      mode: '',
      switch: false
    },
    {
      icon: FIL,
      name: "FIL",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 FIL",
      mode: '',
      switch: false
    },
  ]

  const borrowDataList = [
    {
      icon: SXP,
      name: "SXP",
      direction: "down",
      arrow: downArrowIcon,
      apy: "4.72%",
      wallet: "0 SXP",
      liquidity: '$166,577666.28'
    },
    {
      icon: USDC,
      name: "USDC",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 USDC",
      liquidity: '$166,577666.28'
    },
    {
      icon: XVS,
      name: "XVS",
      direction: "down",
      arrow: downArrowIcon,
      apy: "4.72%",
      wallet: "0 XVS",
      liquidity: '$166,577666.28'
    },
    {
      icon: BNB,
      name: "BNB",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BNB",
      liquidity: '$166,577666.28'
    },
    {
      icon: BTCB,
      name: "BTCB",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BTCB",
      liquidity: '$166,577666.28'
    },
    {
      icon: ETH,
      name: "ETH",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 ETH",
      liquidity: '$166,577666.28'
    },
    {
      icon: USDT,
      name: "USDT",
      direction: "down",
      arrow: downArrowIcon,
      apy: "4.72%",
      wallet: "0 USDT",
      liquidity: '$166,577666.28'
    },
    {
      icon: BUSD,
      name: "BUSD",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BUSD",
      liquidity: '$166,577666.28'
    },
    {
      icon: VAI,
      name: "VAI",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 VAI",
      liquidity: '$166,577666.28'
    },
    {
      icon: BETH,
      name: "BETH",
      direction: "down",
      arrow: downArrowIcon,
      apy: "4.72%",
      wallet: "0 BETH",
      liquidity: '$166,577666.28'
    },
    {
      icon: DAI,
      name: "DAI",
      direction: "down",
      arrow: downArrowIcon,
      apy: "4.72%",
      wallet: "0 DAI",
      liquidity: '$166,577666.28'
    },
    {
      icon: ADA,
      name: "ADA",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 ADA",
      liquidity: '$166,577666.28'
    },
    {
      icon: DOT,
      name: "DOT",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 DOT",
      liquidity: '$166,577666.28'
    },
    {
      icon: LTC,
      name: "LTC",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 LTC",
      liquidity: '$166,577666.28'
    },
    {
      icon: XRP,
      name: "XRP",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 XRP",
      liquidity: '$166,577666.28'
    },
    {
      icon: LINK,
      name: "LINK",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 LINK",
      liquidity: '$166,577666.28'
    },
    {
      icon: BCH,
      name: "BCH",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 BCH",
      liquidity: '$166,577666.28'
    },
    {
      icon: FIL,
      name: "FIL",
      direction: "up",
      arrow: upArrowIcon,
      apy: "4.72%",
      wallet: "0 FIL",
      liquidity: '$166,577666.28'
    },
  ]

  const [currency, setCurrency] = useState(currencyList[0])
  const [switchCheck, setSwitchCheck] = useState(true)
  const [mintValue, setMintValue] = useState(0)
  const [mintSuccess, setMintSuccess] = useState(false)
  const [repayValue, setRepayValue] = useState(0)
  const [stateMarketDataList, setStateMarketDataList] = useState(marketDataList)
  const [currencyTokenData, setCurrencyTokenData] = useState(tokenData.length !== 0 ? tokenData[0] : {})
  const [tabIndex, setTabIndex] = useState(0);

  const externalData = [
    {
      icon: xvsIcon,
      text: '0 XVS',
      type: 'xvs',
      extraText: '',
      plusIcon: plusYellowIcon,
      address: '0x01...4fd1'
    },
    {
      icon: vaiIcon,
      text: '0 VAI',
      type: 'vai',
      extraText: 'APY: 15.1%',
      plusIcon: plusGreenIcon,
      address: '0x01...4fd1'
    }
  ];

  const apyGraphData = [
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

  const handleTabIndex = (index) => {
    setTabIndex(index)
  }

  const handleSwitchCheck = (value) => {
    setSwitchCheck(value);
  }

  const handleListSwitchCheck = (value, name) => {
    let tempMarketDataList = [];
    for (let i = 0; i < stateMarketDataList.length; i++) {
      if (stateMarketDataList[i].name === name) {
        let tempItem = stateMarketDataList[i];
        tempItem.switch = value;
        tempMarketDataList.push(tempItem);
      } else {
        tempMarketDataList.push(stateMarketDataList[i]);
      }
    }
    setStateMarketDataList(tempMarketDataList);
  }

  const handleMintClick = () => {
    console.log("123");
  }

  const handleRepayClick = () => {
    console.log("123");
  }

  const handleAddToken = (type) => {
    console.log(type)
  }

  const handleCurrency = (item) => {
    setCurrency(item)
    console.log(tokenData.length)
    for (let i = 0; i < tokenData.length; i++) {
      if (tokenData[i].name === item.name) {
        setCurrencyTokenData(tokenData[i]);
        break;
      }
    }
  }

  const handleMax = () => {
    console.log('max value')
  }

  useEffect(() => {
    const initData = [
      { name: 'SXP', price: '$523.0294843', liquidity: '305,392.376288384 SXP', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 SXP', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 SXP = 49.107127 vSXP' },
      { name: 'USDC', price: '$4.0294843', liquidity: '50,205,392.376288384 USDC', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 USDC', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 USDC = 49.107127 vUSDC' },
      { name: 'USDT', price: '$3.0294843', liquidity: '50,205,392.3764384 USDT', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 USDT', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 USDT = 49.107127 vUSDT' },
      { name: 'BUSD', price: '$3.0294843', liquidity: '50,205,392.376288384 BUSD', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 BUSD', reserve: '10%', collateral: '55%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 BUSD = 49.107127 vBUSD' },
      { name: 'BNB', price: '$3.0294843', liquidity: '50,205,392.376288384 BNB', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 BNB', reserve: '10%', collateral: '10%', supply: '$268,558,279.29', borrow: '$621,447,420.77', rate: '1 BNB = 49.107127 vBNB' },
      { name: 'XVS', price: '$3.0294843', liquidity: '292.376288384 XVS', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 XVS', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 XVS = 49.107127 vXVS' },
      { name: 'BTCB', price: '$3.0294843', liquidity: '50,205,392.388384 BTCB', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 BTCB', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 BTCB = 49.107127 vBTCB' },
      { name: 'ETH', price: '$3.0294843', liquidity: '50,205,392.376288384 ETH', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 ETH', reserve: '10%', collateral: '10%', supply: '$768,559.29', borrow: '$621,447,420.77', rate: '1 ETH = 49.107127 vETH' },
      { name: 'LTC', price: '$3.0294', liquidity: '50,205,392.388384 LTC', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 LTC', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 LTC = 49.107127 vLTC' },
      { name: 'XRP', price: '$1221.0294843', liquidity: '50,205,392.376288384 XRP', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 XRP', reserve: '10%', collateral: '30%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 XRP = 49.107127 vXRP' },
      { name: 'BCH', price: '$13.0294843', liquidity: '50,205,392.376288384 BCH', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 BCH', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 BCH = 49.107127 vBCH' },
      { name: 'DOT', price: '$23.0294843', liquidity: '50,205,392.376288384 DOT', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 DOT', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 DOT = 49.107127 vDOT' },
      { name: 'LINK', price: '$33.0294843', liquidity: '50,205,392.376288384 LINK', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 LINK', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 LINK = 49.107127 vLINK' },
      { name: 'DAI', price: '$43.0294843', liquidity: '50,205,392.376288384 DAI', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 DAI', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 DAI = 49.107127 vDAI' },
      { name: 'FIL', price: '$53.0294843', liquidity: '50,205,392.376288384 FIL', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 FIL', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 FIL = 49.107127 vFIL' },
      { name: 'BETH', price: '$63.0294843', liquidity: '50,205,392.376288384 BETH', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 BETH', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 BETH = 49.107127 vBETH' },
      { name: 'ADA', price: '$73.0294843', liquidity: '50,205,392.376288384 ADA', suppliers: '3,274', borrowers: '3,100', reserves: '258863.15294246 ADA', reserve: '10%', collateral: '10%', supply: '$768,558,279.29', borrow: '$621,447,420.77', rate: '1 ADA = 49.107127 vADA' },
    ]
    setTokenData(initData)
    setCurrencyTokenData(initData[0])
  }, []);

  return (
    <div>
      <PageTitle>
        Dashboard
      </PageTitle>
      <Row>
        <Col md="5">
          {
            externalData.map((item, index) => {
              return (
                <Container key={`__key-${index.toString()}`}>
                  <FlexLayout justify="space-between">
                    <FlexLayout justify="flex-start">
                      <img src={item.icon} style={{ width: "25px" }} alt="currency" />
                      <VenusText margin="0 10px 0 10px" fontSize="1.2rem">{item.text}</VenusText>
                      <img src={item.plusIcon} className="cursor-pointer" style={{ width: "17px" }} alt="plus" onClick={() => handleAddToken(item.type)} />
                      <VenusText margin="0 0 0 10px" color="#9dd562">{item.extraText}</VenusText>
                    </FlexLayout>
                    <FlexLayout justify="flex-end">
                      <a className='link-address' href="https://bscscan.com/token/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63?a=0x0144a7B97D04FB79152FB6b6Ee535d0Bf4304fd1" target="blank" style={{ display: "flex" }}>
                        <VenusText margin="0 20px 0 0" fontSize="1.1rem" color="inherit">{item.address}</VenusText>
                        <img src={arrowIcon} style={{ width: "1rem", transform: 'rotate(-45deg)' }} alt="arrow" />
                      </a>
                    </FlexLayout>
                  </FlexLayout>
                </Container>
              )
            })
          }
          <Container padding="20px" backgroundImage="linear-gradient(to right, rgb(242, 194, 101), rgb(247, 180, 79))">
            <VenusText align="left" fontSize="2rem" lineHeight="3rem">$0</VenusText>
            <VenusText align="left">Available Credit</VenusText>
            <FlexLayout justify="space-between">
              <VenusText align="left">Borrow Limit</VenusText>
              <VenusText fontSize="1.2rem">0%</VenusText>
            </FlexLayout>
            <Progress value={0} />
          </Container>
          <Container padding="20px">
            <FlexLayout>
              <DropDownMenu list={currencyList} current={currency} setCurrent={handleCurrency}>
                .
              </DropDownMenu>
              <VenusText fontSize="1.1rem">Overview</VenusText>
              <VenusText fontWeight="normal" padding="0 10px" fontSize="0.9rem">SXP</VenusText>
              <img src={plusGreenIcon} className="cursor-pointer" style={{ height: "1.3rem" }} alt="plus" onClick={() => handleAddToken('sxp')} />
              <VenusText fontWeight="normal" padding="0 10px" fontSize="0.9rem">vSXP</VenusText>
              <img src={plusGreenIcon} className='cursor-pointer' style={{ height: "1.3rem" }} alt="plus" onClick={() => handleAddToken('vsxp')} />
              <VenusText fontWeight="normal" padding="0 0 0 10px" fontSize="0.9rem">To MetaMask</VenusText>
            </FlexLayout>
            <VenusText padding="0 0 0 2.5rem" fontSize="0.9rem" fontWeight="normal" color="#a1a1a1" align="left">Historical rates</VenusText>
            <VenusText color="#9dd562" fontSize="1.2rem" align="right">5.35%</VenusText>
            <VenusText fontWeight="normal" color="#a1a1a1" align="right">Supply APY</VenusText>
            <VenusText align="right" margin="8px 0 0 0">APY</VenusText>
            <ResponsiveContainer width="100%" className="dashboard-chart">
              <AreaChart
                data={apyGraphData}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 0
                }}
              >
                <CartesianGrid strokeDasharray="1" />
                <XAxis dataKey="name" />
                <Tooltip contentStyle={{ backgroundColor: 'transparent', border: '0' }} />
                <Area dataKey="APY" stroke={tabIndex === 0 ? "#9dd562": "#d95645"} fill={tabIndex === 0 ? "rgba(157, 213, 98, 0.3)" : "rgba(217, 86, 69, 0.3)"} />
              </AreaChart>
            </ResponsiveContainer>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Price</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.price}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Market Liquidity</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.liquidity}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal"># of Suppliers</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.suppliers}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal"># of Borrowers</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.borrowers}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Reserves</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.reserves}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Reserve Factor</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.reserve}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Collateral Factor</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.collateral}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Total Supply</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.supply}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Total Borrow</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.borrow}</VenusText>
            </FlexLayout>
            <FlexLayout justify="space-between">
              <VenusText color="#a1a1a1" fontSize="0.9rem" fontWeight="normal">Exchange Rate</VenusText>
              <VenusText fontSize="1.1rem">{currencyTokenData.rate}</VenusText>
            </FlexLayout>
          </Container>
        </Col>
        <Col md="7">
          <Container>
            <FlexLayout justify="space-around">
              <FlexLayout direction="column" justify="space-between">
                <VenusText fontSize="1.3rem">Supply Balance</VenusText>
                <VenusText fontSize="1.3rem" margin="30px 0 0 0">$0</VenusText>
              </FlexLayout>
              <FlexLayout width="180px" direction="column">
                <CircularProgressbarWithChildren
                  value={0}
                  strokeWidth={3}
                  styles={buildStyles({
                    pathColor: "turquoise",
                    trailColor: "#f8b94b"
                  })}
                >
                  <VenusText color="#9dd562" fontSize="1.4rem">0%</VenusText>
                  <VenusText fontSize="0.9rem" fontWeight="normal" color="#a1a1a1" margin="10px 0 0 0">Net APY</VenusText>
                </CircularProgressbarWithChildren>
                <FlexLayout direction="column" padding="15px 0 0 0">
                  <Switch switchValue={switchCheck} handleSwitch={handleSwitchCheck} />
                  {
                    switchCheck === true &&
                    <VenusText fontSize="0.9rem">
                      🔥 APY with XVS
                    </VenusText>
                  }
                  {
                    switchCheck === false &&
                    <VenusText fontSize="0.9rem">
                      <span class="gray">🔥</span>APY without XVS
                    </VenusText>
                  }
                </FlexLayout>
              </FlexLayout>
              <FlexLayout direction="column" justify="space-between">
                <VenusText fontSize="1.3rem">Borrow Balance</VenusText>
                <VenusText fontSize="1.3rem" margin="30px 0 0 0">$0</VenusText>
              </FlexLayout>
            </FlexLayout>
          </Container>
          <Container>
            <Tabs onSelect={index => handleTabIndex(index)}>
              <TabList>
                <Tab>Supply Market</Tab>
                <Tab>Borrow Market</Tab>
                <Tab>Mint / Repay VAI</Tab>
              </TabList>
              <TabPanel>
                <DashboardList tokens={stateMarketDataList} type="supply" handleListSwitchCheck={handleListSwitchCheck} />
              </TabPanel>
              <TabPanel>
                <DashboardList tokens={borrowDataList} type="borrow" />
              </TabPanel>
              <TabPanel>
                <FlexLayout padding="20px 0 30px 0">
                  <FlexLayout width="50%">
                    <InputBox value={mintValue} handleChange={(e) => setMintValue(e.target.value)} />
                    <VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>SAFE<br />MAX</VenusText>
                  </FlexLayout>
                  {
                    mintSuccess &&
                    <FlexLayout width="50%">
                      <InputBox value={repayValue} handleChange={(e) => setRepayValue(e.target.value)} />
                      <VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>MAX</VenusText>
                    </FlexLayout>
                  }
                  {
                    !mintSuccess &&
                    <FlexLayout width='50%' direction="column">
                      <img src={VAI} alt="vai" style={{ width: '30px' }} />
                      <VenusText color='#a1a1a1' fontWeight='normal' padding="10px 0 0 0">
                        To repay VAI to the Venus Protocol, you need to approve it first.
                      </VenusText>
                    </FlexLayout>
                  }
                </FlexLayout>
                <FlexLayout justify="space-between">
                  <FlexLayout width="46%">
                    <MintCard title="Available VAI<br /> Limit" balance={0} buttonText="Mint VAI" />
                  </FlexLayout>
                  <FlexLayout width="46%">
                    <MintCard title="Repay VAI<br /> Balance" balance={0} enoughText={!mintSuccess ? "" : "Your balance is not enough."} buttonText={!mintSuccess ? "Enable" : "Repay VAI"} />
                  </FlexLayout>
                </FlexLayout>
              </TabPanel>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = ({ common }) => {
  const { tokenData } = common;
  return { tokenData };
};

const mapDispatchToProp = (dispatch) => {
  return {
    setTokenData: (data) => dispatch(setTokenData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Dashboard);
