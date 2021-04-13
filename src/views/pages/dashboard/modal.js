import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InputBox from './inputbox'
import VenusProgress from '../../../components/Progress'
import { VenusText, FlexLayout, Container } from '../../../components/styles'
import VenusButton from '../../../components/VenusButton';

import XVS from '../../../assets/img/dashboard/xvs-icon.png';
import VAI from '../../../assets/img/dashboard/vai-icon.svg';

const DashboardModal = ({ item, type, toggle, modal }) => {
	const [tabIndex, setTabIndex] = useState(type === 'supply' ? 0 : 1);
	const [value, setValue] = useState(0);
	const [mode, setMode] = useState(item ? item.mode : '');

	const handleTabIndex = (index) => {
		setTabIndex(index);
	}

	const handleMax = () => {
		console.log('max value')
	}

	const handleEnable = (item) => {
		setMode('supply')
	}
	return (
		<div>
			{
				item &&
				<Modal isOpen={modal} centered={true} toggle={toggle} className="custom-modal">
					<ModalHeader toggle={toggle}>
						<FlexLayout>
							<img src={item.icon} alt="currency" style={{ width: '2.5rem' }} />
							<VenusText margin="0 0 0 20px" fontSize="20px" fontWeight="normal">{item.name}</VenusText>
						</FlexLayout>
					</ModalHeader>
					<ModalBody>
						{
							((tabIndex === 0 && type === 'supply' && mode !== 'supply') || (tabIndex === 0 && type === 'borrow')) &&
							<FlexLayout direction="column" padding="1rem 0">
								<img src={item.icon} alt="currency" style={{ width: "3.5rem" }} />
								<VenusText color="#a1a1a1" fontWeight="normal" fontSize="1.2rem" margin="1rem 0">
									{type === 'supply' ? `To Supply ${item.name} to the Venus Protocol, you need to approve it first.` : `To Repay ${item.name} to the Venus Protocol, you need to enable it first.`}
								</VenusText>
							</FlexLayout>
						}
						{
							tabIndex === 0 && type === 'supply' && mode === 'supply' &&
							<FlexLayout direction="column" padding="1rem 0">
								<FlexLayout>
									<InputBox value={value} handleChange={(e) => setValue(e.target.value)} />
									<VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>MAX</VenusText>
								</FlexLayout>
							</FlexLayout>
						}
						{
							((tabIndex === 1 && type === 'supply') || (tabIndex === 1 && type === 'borrow')) &&
							<FlexLayout direction="column" padding="1rem 0">
								<FlexLayout>
									<InputBox value={value} handleChange={(e) => setValue(e.target.value)} />
									<VenusText color="rgb(189, 189, 189)" cursor="pointer" onClick={() => handleMax()}>SAFE<br />MAX</VenusText>
								</FlexLayout>
								{
									type === 'supply' &&
									<VenusText padding="1rem 0 2rem 0" color="#a1a1a1" fontWeight="normal">
										Your available withdraw amount = Total Supply Amount - VAI Mint Amount -Borrowed Amount
									</VenusText>
								}
							</FlexLayout>
						}
						<Tabs defaultIndex={tabIndex} onSelect={index => handleTabIndex(index)}>
							<TabList style={{ flexDirection: type === 'supply' ? "row" : "row-reverse" }}>
								<Tab>{type === 'supply' ? "Supply" : "Repay Borrow"}</Tab>
								<Tab>{type === 'supply' ? "Withdraw" : "Borrow"}</Tab>
							</TabList>
							<TabPanel>
								<Container backgroundColor="#090d27" padding="1.5rem">
									<FlexLayout justify="space-between" padding="0 0 1rem 0">
										<FlexLayout justify="flex-start">
											<img src={item.icon} alt="currency" style={{ width: '2.5rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">{type === 'supply' ? 'Supply' : "Borrow"} APY</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem">2.19%</VenusText>
									</FlexLayout>
									<FlexLayout justify="space-between" padding="0 0 1rem 0">
										<FlexLayout justify="flex-start">
											<img src={XVS} alt="currency" style={{ width: '2.1rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">Distribution APY</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem">1.39%</VenusText>
									</FlexLayout>
									<FlexLayout justify="space-between" padding="0 0 1rem 0" borderBottom="1px solid #252a4a">
										<FlexLayout justify="flex-start">
											<img src={VAI} alt="currency" style={{ width: '2.1rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">{type === 'supply' ? 'Available VAI Limit' : 'Repay VAI Balance'}</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem" width="max-content">0 VAI</VenusText>
									</FlexLayout>
									{
									  mode === 'supply' &&
										<>
											<FlexLayout justify="space-between" padding="1rem 0 0 0">
												<FlexLayout justify="flex-start">
													<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.1rem">Borrow {type === 'supply' ? 'Limit' : 'Balance'}</VenusText>
												</FlexLayout>
												<VenusText fontWeight="normal" fontSize="1.1rem">$0</VenusText>
											</FlexLayout>
											<FlexLayout direction="column" borderBottom="1px solid #252a4a" padding="0 0 7px 0">
												<FlexLayout justify="space-between" padding="1rem 0" width="100%">
													<FlexLayout justify="flex-start">
														<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.1rem">Borrow Limit Used</VenusText>
													</FlexLayout>
													<VenusText fontWeight="normal" fontSize="1.1rem">0%</VenusText>
												</FlexLayout>
												<VenusProgress percent={0} width="100%"></VenusProgress>
											</FlexLayout>
										</>
									}
									<VenusButton text={mode === 'supply' ? 'Supply' : 'Enable'} disabled={mode === 'supply' ? true : false} width="200px" handleClick={() => handleEnable(item)} />
									<FlexLayout justify="space-between" padding="0.8rem 0">
										<VenusText fontSize="1.2rem" fontWeight="normal">Wallet Balance</VenusText>
										<VenusText fontSize="1.2rem" fontWeight="normal">0 {item.name}</VenusText>
									</FlexLayout>
								</Container>
							</TabPanel>
							<TabPanel>
								<Container backgroundColor="#090d27" padding="1.5rem">
									<FlexLayout justify="space-between" padding="0 0 1rem 0">
										<FlexLayout justify="flex-start">
											<img src={item.icon} alt="currency" style={{ width: '2.5rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">
												{type === 'supply' ? 'Supply' : "Borrow"} APY
											</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem">2.19%</VenusText>
									</FlexLayout>
									<FlexLayout justify="space-between" padding="0 0 1rem 0">
										<FlexLayout justify="flex-start">
											<img src={XVS} alt="currency" style={{ width: '2.1rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">Distribution APY</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem">1.39%</VenusText>
									</FlexLayout>
									<FlexLayout justify="space-between" padding="0 0 1rem 0" borderBottom="1px solid #252a4a">
										<FlexLayout justify="flex-start">
											<img src={VAI} alt="currency" style={{ width: '2.1rem' }} />
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.2rem">
												{type === 'supply' ? 'Available VAI Limit' : 'Repay VAI Balance'}
											</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.2rem" width="max-content">0 VAI</VenusText>
									</FlexLayout>
									<FlexLayout justify="space-between" padding="1rem 0 0 0">
										<FlexLayout justify="flex-start">
											<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.1rem">Borrow {type === 'supply' ? 'Limit' : 'Balance'}</VenusText>
										</FlexLayout>
										<VenusText fontWeight="normal" fontSize="1.1rem">$0</VenusText>
									</FlexLayout>
									<FlexLayout direction="column" borderBottom="1px solid #252a4a" padding="0 0 7px 0">
										<FlexLayout justify="space-between" padding="1rem 0" width="100%">
											<FlexLayout justify="flex-start">
												<VenusText margin="0 0 0 1rem" fontWeight="normal" fontSize="1.1rem">Borrow Limit Used</VenusText>
											</FlexLayout>
											<VenusText fontWeight="normal" fontSize="1.1rem">0%</VenusText>
										</FlexLayout>
										<VenusProgress percent={10} width="100%"></VenusProgress>
									</FlexLayout>
									<VenusButton text={type === 'supply' ? 'Withdraw' : 'Borrow'} width="200px" />
									<FlexLayout justify="space-between" padding="0.8rem 0">
										<VenusText fontSize="1.2rem" fontWeight="normal">Protocol Balane</VenusText>
										<VenusText fontSize="1.2rem" fontWeight="normal">0 {item.name}</VenusText>
									</FlexLayout>
								</Container>
							</TabPanel>
						</Tabs>
					</ModalBody>
				</Modal>
			}
		</div>
	)
}
export default DashboardModal