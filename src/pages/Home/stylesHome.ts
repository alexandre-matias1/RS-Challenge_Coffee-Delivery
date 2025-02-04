import styled from "styled-components";

export const HomeContainer = styled.main``;

export const BackgroundEffect = styled.div`
  height: 34rem;
  background: rgb(219, 172, 44);
  background: radial-gradient(
    circle,
    rgba(219, 172, 44, 0.22872899159663862) 0%,
    rgba(184, 152, 251, 0.16150210084033612) 60%,
    rgba(128, 71, 248, 0.09147408963585435) 86%
  );
`;


export const FourItensContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    width: 35.43rem;

    span{
        display: flex;
    }
    
`;
