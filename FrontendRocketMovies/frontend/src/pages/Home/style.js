import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  margin-top: 50px;

  padding: 0 125px;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }

    button {
      width: 200px;
    }
  }
  a {
    color: white;
  }
`;

export const Card = styled.div`
  margin-top: 40px;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 16px;
  cursor: pointer;

  p {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-top: 15px;
  }
  > div {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export const Tags = styled.div`
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 8px;
`;
export const Rating = styled.div`
  display: flex !important;
  gap: 10px !important;
  svg {
    color: ${({ theme }) => theme.COLORS.PINK} !important;
  }
`;
