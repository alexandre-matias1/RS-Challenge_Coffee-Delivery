import styled from "styled-components";


export const RemoveButtonContainer = styled.button`
    background: ${(props) => props.theme['base-button']};
    display: flex;
    gap: 4px;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;

    color: ${(props) => props.theme['base-text']};

    &:hover {
        background: ${(props) => props.theme['base-hover']};
    }
`