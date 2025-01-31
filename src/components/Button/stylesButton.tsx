import styled from "styled-components";

export const ButtonContainer = styled.button`
   width: 8.25rem;
   height: 4rem;

   background: ${(props) => props.theme['yellow-200']};

   font-family: 'Roboto', sans-serif;
   font-size: 0.875rem;
   font-weight: bold;
   color: ${(props) => props.theme['white']};
   border: none;
   border-radius: 8px;

   &:hover{
     background: ${(props) => props.theme['yellow-300']};
   }
`

