import styled from "styled-components";
export const CartContainer = styled.header`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-300"]};
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 130%;
  gap: 0.25rem;
`;

export const CartCounterContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-300"]};
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;

  a {
    font-size: 14px;
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
    position: absolute;
    background-color: ${(props) => props.theme["yellow-300"]};
    top: -14px;
    left: 34px;
    padding: 4px 9px;
    border-radius: 100px;
    line-height: 130%;
  }
`;
