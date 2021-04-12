import React, { useState, useEffect, useMemo } from 'react'
import { useMedia } from 'react-use';
import styled from 'styled-components'

import { Box, Flex, Text } from 'rebass'
import { withRouter } from 'react-router-dom'

import theme from '../../../../theme'
import { Row, Divider, VenusText, FlexLayout, PageTitle } from '../../../../components/styles'
import VenusIcon from '../../../../components/VenusIcon'

const OVERVIEW_TOKEN_BLACKLIST = [];

// @TODO rework into virtualized list
function TransactionList({ tokens }) {

	const isMobile = useMedia('(max-width: 768px)');

	const ListItem = ({ item }) => {
		return (
			<DashGrid>
				<DataText area="action" fontWeight="500">
					<Row>
						<FlexLayout direction="column" align="flex-start">
							<VenusText width="max-content">{item.action}</VenusText>
						</FlexLayout>
					</Row>
				</DataText>
				<DataText area="age" justify="flex-start">
					<VenusText>{item.age}</VenusText>
				</DataText>
				<DataText area="result">
					<VenusIcon icon={item.icon} width="24px" height="24px" marginRight="20px" />
					<VenusText>{item.result}</VenusText>
				</DataText>
			</DashGrid>
		)
	}

	return (
		<ListWrapper>
			<DashGrid style={{ height: 'fit-content', padding: '0 1.125rem 1rem 1.125rem' }}>
				<Flex alignItems="center" justifyContent="flex-start">
					<ClickableText
						area="action"
					>
						Action
					</ClickableText>
				</Flex>
				<Flex alignItems="center" justifyContent="flex-start">
					<ClickableText
						area="age"
					>
						Age
					</ClickableText>
				</Flex>
				<Flex alignItems="center" justifyContent="center">
					<ClickableText
						area="result"
					>
						Result
					</ClickableText>
				</Flex>
			</DashGrid>
			<Divider />
			<List p={0}>
				{
					tokens.map((item, index) => {
						return (
							<div key={index}>
								<ListItem key={index} item={item} />
								<Divider />
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
  grid-gap: 1em;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  grid-template-areas: 'name liq vol';
  padding: 1.25rem 1.125rem;
  border-bottom: 1px solid rgba(0, 0, 0, .05);

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
    grid-template-columns: 1.5fr 1.5fr 1fr;
    grid-template-areas: 'asset apy wallet collateral';
  }
`

const ListWrapper = styled.div`
	padding: 15px 0 0 0;
`

const ClickableText = styled(Text)`
  display: flex;
  align-items: center;
  text-align: end;
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
	justify-content: ${props => props.justify || "center"};

  & > * {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const SORT_FIELD = {
	ASSET: 'action',
	APY: 'age',
	WALLET: 'result',
}

export default withRouter(TransactionList)
