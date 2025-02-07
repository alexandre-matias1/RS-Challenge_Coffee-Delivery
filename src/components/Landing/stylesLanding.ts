import styled from "styled-components";

export const FourItensContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  width: 35.45rem;
  margin-top: 4.125rem;

  span {
    width: 18.375rem;
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme["base-text"]};
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 130%;
    font-weight: 400;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 100%;
  }

  .box-1 {
    background: ${(props) => props.theme["yellow-300"]};
  }
  .box-2 {
    background: ${(props) => props.theme["base-text"]};
  }
  .box-3 {
    background: ${(props) => props.theme["yellow-200"]};
  }
  .box-4 {
    background: ${(props) => props.theme["purple-200"]};
  }
`;

export const LeftContainer = styled.div`
  margin-top: 5.875rem;
  width: 36.75rem;
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 900;
    color: ${(props) => props.theme["base-title"]};
    //base/title
    //text regular l
  }

  .subtitle {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 130%;
    font-weight: 500;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const RightContainer = styled.div`
  margin-top: 5.875rem;
`;
