import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import VenusButton from '../../../components/VenusButton';
import { VenusText, FlexLayout, Divider } from '../../../components/styles'
import { Address, Input } from './style'

import checkIcon from '../../../assets/img/check-vote-icon.png';
import nextIcon from '../../../assets/img/icons/next.png';

const VoteModal = ({ toggle, modal }) => {
	const [tabIndex, setTabIndex] = useState(0)

	const handleTabIndex = (index) => {
		setTabIndex(index);
	}

	const handleClick = () => {

	}

	return (
		<div>
			<Modal isOpen={modal} centered={true} toggle={toggle} className="custom-modal">
				<ModalHeader toggle={toggle}>
					<FlexLayout>
						{
							tabIndex !== 0 &&
							<img src={nextIcon} alt="back" style={{cursor: 'pointer', position: 'absolute', left: '20px', transform: 'rotate(180deg)'}} onClick={() => handleTabIndex(0)} />
						}
						<VenusText margin="0 0 0 20px" fontSize="1.8rem" fontWeight="normal">{tabIndex === 0 ? "Choose Delegation Type" : tabIndex === 1 ? "Confirm Transaction" : "Delegating Voting"}</VenusText>
					</FlexLayout>
				</ModalHeader>
				<ModalBody>
					{
						tabIndex === 0 &&
						<>
							<FlexLayout wrap="nowrap" align="flex-start" padding="0 0 30px 0" style={{cursor: "pointer"}} onClick={() => handleTabIndex(1)}>
								<img src={checkIcon} style={{ width: '30px' }} alt="check" />
								<FlexLayout direction="column">
									<FlexLayout justify="space-between" width="100%" padding="0 15px">
										<VenusText fontSize="1.3rem">Manual Voting</VenusText>
										<img src={nextIcon} style={{ width: '30px' }} alt="next" />
									</FlexLayout>
									<VenusText align="left" fontWeight="mormal" color="#a1a1a1" padding="15px 0 0 0">This option allows you to vote on proposals directly from your connected wallet.</VenusText>
								</FlexLayout>
							</FlexLayout>
							<Divider />
							<FlexLayout wrap="nowrap" align="flex-start" padding="30px 0 0 0" style={{cursor: "pointer"}} onClick={() => handleTabIndex(2)}>
								<img src={checkIcon} style={{ width: '30px' }} alt="check" />
								<FlexLayout direction="column">
									<FlexLayout justify="space-between" width="100%" padding="0 15px">
										<VenusText fontSize="1.3rem">Delegate Voting</VenusText>
										<img src={nextIcon} style={{ width: '30px' }} alt="next" />
									</FlexLayout>
									<VenusText align="left" fontWeight="mormal" color="#a1a1a1" padding="15px 0 0 0">This option allows you to vote on proposals directly from your connected wallet.</VenusText>
								</FlexLayout>
							</FlexLayout>
						</>
					}
					{
						tabIndex === 1 &&
						<>
							<VenusText fontSize="2.2rem" padding="20px 0">
								0.00000000 Votes
							</VenusText>
							<VenusText fontSize="1.3rem" fontWeight="normal" padding="20px 0">
								Manual Voting from 0x01...4fd1
							</VenusText>
							<FlexLayout width="100%" padding="20px 0">
								<div className="modal-loading"></div>
							</FlexLayout>
							<VenusText color="#a1a1a1" padding="20px 0 0 0" fontWeight="normal">
								Confirm the transaction
							</VenusText>
						</>
					}
					{
						tabIndex === 2 &&
						<>
							<VenusText fontSize="1.3rem" padding="20px 0" fontWeight="normal" align="left">
								Select and Address
							</VenusText>
							<VenusText color="#a1a1a1" fontSize="0.9rem" padding="0 0 30px 0" align="left">
								If you know the address you wish to delegate to, enter it below. If not, you can view the Delegate Leaderboard to find a political party you wish to support.
							</VenusText>
							<Divider />
							<FlexLayout justify="space-between" padding="30px 0">
								<VenusText fontSize="1.2rem" fontWeight="normal">Delegate Address</VenusText>
								<Address to="/pages/vote/leaderboard">Delegate Leaderboard</Address>
							</FlexLayout>
							<Input placeholder="Enter a 0x address" />
							<VenusButton text="Get Started" width="100%" height="46px" handleClick={handleClick} />
						</>
					}
				</ModalBody>
			</Modal>
		</div>
	)
}
export default VoteModal