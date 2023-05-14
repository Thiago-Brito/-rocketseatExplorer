import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
   
    border-radius: 10px;
    padding: 17px;

    background-color: ${({ theme , isActive}) => isActive ? theme.COLORS.PINK : theme.COLORS.BLACK};
    color: ${({ theme , isActive}) => isActive ? theme.COLORS.BLACK : theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
`