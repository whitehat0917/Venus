import React from "react";
import { VenusText, Container, FlexLayout } from '../../../components/styles';
import styled from 'styled-components';
import theme from '../../../theme';

import vaiIcon from '../../../assets/img/dashboard/vai-icon.svg';

const Button = styled.button`
    width: 100%;
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 6px;
    font-size: 1.2rem;
`

const MintCard = ({ title, balance, enoughText, buttonText, handleButton }) => {

    return (
        <Container backgroundColor={theme.bgMain} padding="15px 20px">
            <FlexLayout justify="space-between" padding="0 0 20px 0" borderBottom={`1px solid ${theme.bgActive}`} >
                <FlexLayout justify="flex-start">
                    <img src={vaiIcon} style={{width: "30px"}} alt="VAI" />
                    <VenusText padding="0 0 0 10px" fontSize="1.1rem" fontWeight="normal" dangerouslySetInnerHTML={{
                        __html: title
                      }}></VenusText>
                </FlexLayout>
                <div>
                    <VenusText width="max-content" fontSize="1.1rem" fontWeight="normal">{balance} VAI</VenusText>
                </div>
            </FlexLayout>
            <FlexLayout height="50px">
                <VenusText fontWeight="normal" color={theme.colorSecondary}>{enoughText}</VenusText>
            </FlexLayout>
            <Button onClick={handleButton}>{buttonText}</Button>
            <FlexLayout justify="space-between" padding="20px 0 0 0">
                <VenusText fontSize="1.1rem" fontWeight="normal">VAI Balance</VenusText>
                <VenusText width="max-content" fontSize="1.1rem" fontWeight="normal">{balance} VAI</VenusText>
            </FlexLayout>
        </Container>
    )
}
export default MintCard