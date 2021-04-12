import React from "react";
import styled from 'styled-components';
import theme from '../../../theme';

const Input = styled.input`
    background-color: transparent;
    border: 0;
    color: ${theme.colorYellow};
    text-align: center;
    font-size: 2.5rem;
    width: 65%;
    :focus{
        outline: 0;
    }
`

const InputBox = ({ value, handleChange }) => {

    return (
        <Input type="number" value={value} onChange={handleChange} />
    )
}
export default InputBox