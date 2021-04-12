import styled from 'styled-components';
import { Box } from 'rebass/styled-components'
import { Link as RouterLink } from 'react-router-dom'
import theme from '../theme';

export const FlexLayout = styled.div`
    width: ${props => props.width || "auto"};
    max-width: ${props => props.maxWidth || "auto"};
    height: ${props => props.height || "auto"};
    max-height: ${props => props.maxHeight || "auto"};
    min-height: ${props => props.minHeight || "auto"};
    display: flex;
    position: ${props => props.position || "0"};
    top: ${props => props.top || "auto"};
    bottom: ${props => props.bottom || "auto"};
    left: ${props => props.left || "auto"};
    right: ${props => props.right || "auto"};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "center"};
    align-items: ${props => props.align || "center"};
    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
    border-top: ${props => props.borderTop || "0"};
    border-bottom: ${props => props.borderBottom || "0"};
    background-color: ${props => props.backgroundColor || "transparent"};
    border-radius: ${props => props.borderRadius || 0};
    flex-wrap: ${props => props.wrap || 'wrap'};
    overflow: ${props => props.overflow || 'unset'};
`;
export const VenusText = styled.p`
    width: ${props => props.width || "auto"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    font-size: ${props => props.fontSize || "1rem"};
    font-weight: ${props => props.fontWeight || "bold"};
    line-height: ${props => props.lineHeight || "1.5rem"};
    color: ${props => props.color || "white"};
    max-width: ${props => props.maxWidth || "auto"};
    text-align: ${props => props.align || "center"};
    white-space: ${props => props.whiteSpace || "none"};
    text-overflow: ${props => props.textOverflow || "none"};
    overflow: ${props => props.overflow || "none"};
    cursor: ${props => props.cursor || 'unset'};
`;
export const PageTitle = styled.p`
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 1.4rem;
    margin-top: 20px;
    line-height: 3rem;
    color: white;
    font-weight: bold;
`;
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.height || "auto"};
    border-radius: ${props => props.borderRadius || "25px"};
    padding: ${props => props.padding || "35px 20px"};
    margin: ${props => props.margin || "0 0 20px 0"};
    background-color: ${props => props.backgroundColor || theme.bgPrimary};
    background-image: ${props => props.backgroundImage || "none"};
`;
export const StyledIcon = styled.div`
  color: ${(props => props.color || theme.colorWhite)};
`;

export const Row = styled(Box)`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  align-items: ${({ align }) => align && align};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: ${({ justify }) => justify};
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
`

export const RowFlat = styled.div`
  display: flex;
  align-items: flex-end;
`

export const AutoRow = styled(Row)`
  flex-wrap: ${({ wrap }) => wrap ?? 'nowrap'};
  margin: -${({ gap }) => gap};
  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`

export const RowFixed = styled(Row)`
  width: fit-content;
`

export const Divider = styled(Box)`
  height: 1px;
  background-color: ${theme.bgActive};
`

export const CustomLink = styled(RouterLink)`
  display: block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: none;
    underline: none;
  }
`
export const BscScanLink = styled(RouterLink)`
  text-decoration: none;
  font-size: 17px;
  font-weight: 900;
  color: ${theme.colorWhite};

  &:hover {
    cursor: pointer;
    text-decoration: none;
    underline: none;
    color: ${theme.colorOrange};
  }
`
export const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
  border-radius: 50%;
  background-color: ${props => props.backgroundColor || theme.bgActive};
  margin: ${props => props.margin || "0"};
  transform: ${props => props.transform || "none"};
`