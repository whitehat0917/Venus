import styled from 'styled-components';
import theme from '../../../../theme';

export const InfoDisplay = styled.div`
    display: flex;
    flex-direction: column;

    h6 {
      color: ${theme.colorWhite};
      font-size: 17px;
      font-weight: 900
      text-align: ${(props) => props.align || "left"};
    }

    p {
      color: ${theme.colorSecondary};
      font-size: 16px;
      text-align: ${(props) => props.align || "left"};
    }
`;