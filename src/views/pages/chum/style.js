import styled from 'styled-components';
import theme from '../../../theme';

export const InfoDisplay = styled.div`
    display: flex;
    flex-direction: column;

    h6 {
      color: ${theme.colorSecondary};
      font-size: 12px;
    }

    p {
      color: ${theme.colorWhite};
      font-weight: bold;
      font-size: 20px;
    }
`;