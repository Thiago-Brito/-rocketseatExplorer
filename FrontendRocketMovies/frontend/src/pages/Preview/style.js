import styled from "styled-components";

export const Container = styled.div`
  > main {
    padding: 40px 123px;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      margin-bottom: 25px;
    }
    div {
      display: flex;
      align-items: center;
      gap: 20px;
      > img {
        height: 20px;
      }
    }

    div:nth-child(4) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    p {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;
      margin-top: 50px;
    }
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 25px;
  img {
    border-radius: 50%;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Tags = styled.div`
  margin-top: 40px;
  padding: 5px 15px;
  background-color: #282124;
  border-radius: 8px;
`;

export const Nota = styled.div`
  > div {
    display: flex !important;
    gap: 10px !important;
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
