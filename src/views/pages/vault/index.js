import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import InputBox from '../dashboard/inputbox'
import { FlexLayout, VenusText, PageTitle, Container } from '../../../components/styles';

import XVS from '../../../assets/img/icons/xvs-icon.png'
import VAI from '../../../assets/img/dashboard/vai-icon.svg'

const Vault = () => {
	const [availableValue, setAvailableValue] = useState(0)
	const [stakeValue, setStakeValue] = useState(0)

	const staticData = [
		{ name: 'Total emission per day', amount: '1,250 XVS' },
		{ name: 'Total VAI Staked', amount: '120,725,198.713 VAI' },
		{ name: 'VAI Staking APY', amount: '17.46%' },
		{ name: 'VAI Vault Reward Pool', amount: '4,288.6902 XVS' }
	]

	const handleMax = () => {
		console.log('max value')
	}

	return (
		<div>
			<PageTitle>
				Vault
      </PageTitle>
			<Row>
				<FlexLayout width="100%" maxWidth="1200px" direction="column" margin="auto" align="unset">
					<Row>
						<Col md='12'>
							<Container>
								<FlexLayout>
									{
										staticData.map((item, index) => {
											return (
												<Col md='3' className="mobile-mb-20" key={`__key-${index.toString()}`}>
													<VenusText fontSize="1.3rem" color="#a1a1a1" align="left">{item.name}</VenusText>
													<VenusText fontSize="1.5rem" margin="10px 0 0 0" align="left">{item.amount}</VenusText>
												</Col>
											)
										})
									}
								</FlexLayout>
							</Container>
						</Col>
					</Row>
					<Row>
						<Col md='5'>
							<Container height="calc(100% - 20px)" padding='35px'>
								<FlexLayout justify='space-between' direction='column' align='flex-start' height='100%'>
									<div className='w-100'>
										<VenusText fontSize="1.3rem" color="#a1a1a1" align="left">Available VAI to stake</VenusText>
										<FlexLayout className="mt-15" justify="flex-start">
											<img src={VAI} className="w-30 mr-10" alt="vai" />
											<VenusText fontSize="1.5rem" align="left">0 VAI</VenusText>
										</FlexLayout>
									</div>
									<div className='w-100'>
										<VenusText className="mt-40" fontSize="1.3rem" color="#a1a1a1" align="left">VAI Staked</VenusText>
										<FlexLayout className="mt-15" justify="flex-start">
											<img src={VAI} className="w-30 mr-10" alt="vai" />
											<VenusText fontSize="1.5rem" align="left">0 VAI</VenusText>
										</FlexLayout>
									</div>
									<div className='w-100'>
										<VenusText className="mt-40" fontSize="1.3rem" color="#a1a1a1" align="left">Available VAI rewards</VenusText>
										<FlexLayout className="mt-15" justify="space-between">
											<FlexLayout justify="flex-start">
												<img src={XVS} className="w-30 mr-10" alt="vai" />
												<VenusText fontSize="1.5rem" align="left">0 XVS</VenusText>
											</FlexLayout>
											<VenusText fontSize="1.2rem" color="#a1a1a1" align="right">Claim</VenusText>
										</FlexLayout>
									</div>
									<div className='w-100'>
										<VenusText className="mt-40" fontSize="1.3rem" color="#a1a1a1" align="left">Venus Balance</VenusText>
										<FlexLayout className="mt-15" justify="flex-start">
											<img src={XVS} className="w-30 mr-10" alt="vai" />
											<VenusText fontSize="1.5rem" align="left">0 XVS</VenusText>
										</FlexLayout>
									</div>
								</FlexLayout>
							</Container>
						</Col>
						<Col md='7'>
							<Container>
								<Container backgroundColor='#090d27'>
									<VenusText fontSi='1.2rem' fontWeight='normal'>Available VAI to stake: 0 VAI</VenusText>
									<FlexLayout padding="10px 0">
										<InputBox value={availableValue} handleChange={(e) => setAvailableValue(e.target.value)} />
										<VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>MAX</VenusText>
									</FlexLayout>
									<button className='primary-button'>Enable</button>
								</Container>
								<Container backgroundColor='#090d27' margin="0">
									<VenusText fontSi='1.2rem' fontWeight='normal'>VAI staked: 0 VAI</VenusText>
									<FlexLayout padding="10px 0">
										<InputBox value={availableValue} handleChange={(e) => setAvailableValue(e.target.value)} />
										<VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>MAX</VenusText>
									</FlexLayout>
									<button className='primary-button'>Enable</button>
								</Container>
							</Container>
						</Col>
					</Row>
				</FlexLayout>
			</Row>
		</div>
	)
}

export default Vault;
