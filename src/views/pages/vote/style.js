import styled from 'styled-components';
import theme from '../../../theme';
import { CustomLink } from '../../../components/styles';

export const InfoDisplay = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: ${props => props.titleColor || theme.colorSecondary};
    font-weight: bold;
    font-size: ${props => props.titleFontSize || "16px"};
  }

  p {
    color: ${props => props.preColor || theme.colorWhite};
    font-weight: bold;
    font-size: ${props => props.textFontSize || "28px"};
    margin: 0;
    line-height: 1;

    span {
      font-size: ${props => props.textFontSize || "28px"};
      color: ${props => props.sufColor || theme.colorOrange};
      font-weight: bold;
    }
  }
`;

export const Address = styled(CustomLink)`
  color: ${theme.textBlue};
  :hover{
    color: ${theme.textBlue};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  background-color: rgb(27, 32, 64);
  border: 1px solid rgb(121, 121, 121);
  font-size: 13.5px;
  text-align: center;
  color: ${theme.colorWhite};
  margin-bottom: 20px;
`;