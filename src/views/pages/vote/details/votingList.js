import React, { useState, useEffect, useMemo } from 'react'
import { useMedia } from 'react-use';
import styled from 'styled-components'
import { Col } from 'reactstrap'

import { Box, Flex, Text } from 'rebass'
import { withRouter, Redirect } from 'react-router-dom'
import ChunHumProgress from '../../../../components/Progress'
import { Row, Divider, ChumHumText, FlexLayout } from '../../../../components/styles'
import greenIcon from '../../../../assets/img/check-icon-green.svg'
import purpleIcon from '../../../../assets/img/check-icon-purple.svg'

// @TODO rework into virtualized list
function VotingList({ tokens }) {
	const isMobile = useMedia('(max-width: 768px)');

	const ListItem = ({ item }) => {
		const [url, setUrl] = useState('')

		return (
			<>
				{
					url !== '' &&
					<Redirect to={url} />
				}
				<Row onClick={() => setUrl('/pages/vote/proposal/' + item.id)}>
					<Col md='6'>
						<FlexLayout direction="column" align="flex-start">
							<ChumHumText fontSize="1.3rem">{item.title}</ChumHumText>
							<FlexLayout padding="10px 0 0 0" justify="flex-start">
								<ChumHumText color="#a1a1a1" fontWeight="normal">{item.subTitle}</ChumHumText>
								<ChumHumText color={item.status === 'Passed' ? '#09d395' : '#ff4a21'} padding="0 0 0 10px">{item.status}</ChumHumText>
							</FlexLayout>
						</FlexLayout>
					</Col>
					<Col md='3'>
						<FlexLayout direction="column">
							<ChunHumProgress percent={item.greenAmount} width="90%" progressColor="#09d395" backgroundColor="transparent"></ChunHumProgress>
							{
								item.purpleAmount !== '0' &&
								<ChunHumProgress percent={item.purpleAmount} width="90%" progressColor="#906de5" backgroundColor="transparent"></ChunHumProgress>
							}
						</FlexLayout>
					</Col>
					<Col md='1'>
						<img src={item.iconValue === 0 ? greenIcon : purpleIcon} style={{ width: "30px" }} alt="check" />
					</Col>
					<Col md='2'>
						<ChumHumText fontSize="1.3rem">{item.iconValue === 0 ? 'For' : 'Against'}</ChumHumText>
					</Col>
				</Row>
			</>
		)
	}
	return (
		<ListWrapper>
			<List p={0}>
				{
					tokens.map((item, index) => {
						return (
							<>
								<div key={index} style={{ padding: "10px 0", cursor: 'pointer' }}>
									<ListItem key={index} item={item} />
								</div>
								<Divider />
							</>
						)
					})}
			</List>
		</ListWrapper>
	)
}

const ListWrapper = styled.div`
`

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

export default withRouter(VotingList)
