import styled from "styled-components";


export const CartButtonContainer = styled.button`
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: none;

    background: ${(props) => props.theme['purple-200']};
    
    &:hover {
        background: ${(props) => props.theme['purple-300']};
    }
`