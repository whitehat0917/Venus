import styled from 'styled-components';
import theme from '../../../theme';

export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 30px auto;
  padding: 20px 30px;

  .supply-board {
    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      align-items: flex-start;
      > div {
        margin: 10px 0;
      }
    }
  }
`;

export const InfoDisplay = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: ${theme.colorSecondary};
    font-weight: 600;
    font-size: 20px;
  }

  p {
    color: ${theme.colorWhite};
    font-weight: 600;
    font-size: 24px;
    margin: 0;
  }
`;