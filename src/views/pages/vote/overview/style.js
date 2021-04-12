import styled from 'styled-components';
import theme from '../../../../theme';
import { CustomLink } from '../../../../components/styles';

export const Address = styled(CustomLink)`
  color: ${theme.colorWhite};
  
  &:hover {
    color: ${theme.colorOrange};
  }
`
