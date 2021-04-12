import React, { useState, useEffect, useMemo } from 'react'
import { useMedia } from 'react-use';
import Switch from '../../../components/listSwitch'
import DashboardModal from './modal'
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
import { withRouter } from 'react-router-dom'

import theme from '../../../theme'
import { Row } from '../../../components/styles'
import { VenusText, FlexLayout } from '../../../components/styles'
import VenusIcon from '../../../components/VenusIcon'

const OVERVIEW_TOKEN_BLACKLIST = [];

// @TODO rework into virtualized list
function DashboardList({ tokens, type, handleListSwitchCheck }) {
	// sorting
	const [sortDirection, setSortDirection] = useState(true)
	const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.APY)
	const [openModal, setOpenModal] = useState(false)
	const [modalItem, setModalItem] = useState()

	const isMobile = useMedia('(max-width: 768px)');

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
					return a[sortedColumn] > b[sortedColumn] ? (sortDirection ? -1 : 1) * 1 : (sortDirection ? -1 : 1) * -1
				})
		)
	}, [formattedTokens, sortDirection, sortedColumn])

	const handleOpenModal = (item) => {
		setOpenModal(true);
		setModalItem(item);
	}

	const handleModalToggle = () => {
		setOpenModal(!openModal);
	}

	const ListItem = ({ item }) => {
		return (
			<DashGrid>
				<DataText area="asset" fontWeight="500" onClick={() => handleOpenModal(item)}>
					<Row>
						<VenusIcon icon={item.icon} width="24px" height="24px" marginRight="8px" />
						<FlexLayout direction="column">
							<VenusText>{item.name}</VenusText>
							{
								isMobile &&
								<VenusText fontSize="0.9rem" color={item.direction === 'up' ? 'rgb(157, 213, 98)' : 'rgb(249, 5, 62)'}>{item.apy}</VenusText>
							}
						</FlexLayout>
					</Row>
				</DataText>
				{
					!isMobile &&
					<DataText area="apy" onClick={() => handleOpenModal(item)}>
						<VenusIcon icon={item.arrow} width="18px" height="18px" marginRight="20px" />
						<VenusText color={item.direction === 'up' ? 'rgb(157, 213, 98)' : 'rgb(249, 5, 62)'}>{item.apy}</VenusText>
					</DataText>
				}
				<DataText area="wallet" onClick={() => handleOpenModal(item)}>
					<VenusText>{item.wallet}</VenusText>
				</DataText>
				<DataText area="collateral">
					{
						type === 'supply' &&
						<Switch switchValue={item.switch} name={item.name} handleSwitch={handleListSwitchCheck} />
					}
					{
						type === 'borrow' &&
						<VenusText onClick={() => handleOpenModal(item)}>{item.liquidity}</VenusText>
					}
				</DataText>
			</DashGrid>
		)
	}

	return (
		<ListWrapper>
			{
				openModal &&
				<DashboardModal item={modalItem} type={type} modal={openModal} toggle={handleModalToggle} />
			}
			<VenusText fontSize="1.5rem" padding="15px 1.25rem" align="left" fontWeight="normal">All Markets</VenusText>
			<DashGrid style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
				<Flex alignItems="center" justifyContent="flexStart">
					<ClickableText
						area="name"
						onClick={(e) => {
							setSortedColumn(SORT_FIELD.ASSET)
							setSortDirection(sortedColumn !== SORT_FIELD.ASSET ? true : !sortDirection)
						}}
					>
						Asset {sortedColumn === SORT_FIELD.ASSET ? (!sortDirection ? '↑' : '↓') : ''}
					</ClickableText>
				</Flex>
				{
					!isMobile &&
					<Flex alignItems="center">
						<ClickableText
							area="apy"
							onClick={(e) => {
								setSortedColumn(SORT_FIELD.APY)
								setSortDirection(sortedColumn !== SORT_FIELD.APY ? true : !sortDirection)
							}}
						>
							APY {sortedColumn === SORT_FIELD.APY ? (!sortDirection ? '↑' : '↓') : ''}
						</ClickableText>
					</Flex>
				}
				<Flex alignItems="center">
					<ClickableText
						area="wallet"
						onClick={(e) => {
							setSortedColumn(SORT_FIELD.WALLET)
							setSortDirection(sortedColumn !== SORT_FIELD.WALLET ? true : !sortDirection)
						}}
					>
						Wallet
            {sortedColumn === SORT_FIELD.WALLET ? (!sortDirection ? '↑' : '↓') : ''}
					</ClickableText>
				</Flex>
				<Flex alignItems="center">
					<ClickableText
						area="collateral"
						onClick={(e) => {
							setSortedColumn(SORT_FIELD.COLLATERAL)
							setSortDirection(sortedColumn !== SORT_FIELD.COLLATERAL ? true : !sortDirection)
						}}
					>
						{type === 'supply' ? "Collateral" : "Liquidity"}
						{sortedColumn === SORT_FIELD.COLLATERAL ? (!sortDirection ? '↑' : '↓') : ''}
					</ClickableText>
				</Flex>
			</DashGrid>
			<List p={0}>
				{filteredList &&
					filteredList.map((item, index) => {
						return (
							<div key={index}>
								<ListItem key={index} type={type} item={item} />
							</div>
						)
					})}
			</List>
		</ListWrapper>
	)
}

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
	cursor: pointer;
  grid-gap: 1em;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-areas: 'name liq vol';
  padding: 1.25rem 1.125rem;
  border-bottom: 1px solid rgba(0, 0, 0, .05);

  &:hover {
    border-left: 2px solid ${theme.colorOrange};
    background-color: ${theme.bgActive};
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
    grid-template-columns: 1.5fr 0.6fr 1fr 1fr;
    grid-template-areas: 'asset apy wallet collateral';
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
  color: ${theme.colorSecondary};

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
	ASSET: 'asset',
	APY: 'apy',
	WALLET: 'wallet',
	COLLATERAL: 'collateral',
}

export default withRouter(DashboardList)
