import styled from 'styled-components';
import theme from '../../../../theme';
import { CustomLink } from '../../../../components/styles';

export const Address = styled(CustomLink)`
  color: ${theme.colorSecondary};
  
  &:hover {
    color: ${theme.colorOrange};
  }
`

export const ExternalAddress = styled.a`
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: block;
  text-align: center;
  padding-top: 20px;
  
  &:hover {
    color: ${theme.colorOrange} !important;
  }
`